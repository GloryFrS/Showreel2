import React from 'react';
import axios from 'axios';
import base64 from 'base-64';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

import Welcome from './panels/Welcome';
import Start from './panels/Start';
import Registration from './panels/Registration';
import Geolocation from './panels/Geolocation';
import Notification from './panels/Notification';
import Smartphone from './panels/Smartphone';
import Monetization from './panels/Monetization';
import Business from './panels/Business';
import Contacts from './panels/Contacts';
import SubscribeSpam from './panels/SubscribeSpam';
import SubscribeGroup from './panels/SubscribeGroup';
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'welcome',
			platform: 'web',
			showResult: false,
			allowGeolocation: true,
			allowNotification: false,
			hungry: true,
			subSpam: false,
			subGroup: false,
			test: '' //check
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetClientVersionResult':
					this.setState({ platform: e.detail.data.platform });
					if (this.state.platform === 'android') {
						connect.send('VKWebAppSetViewSettings', {
							status_bar_style: 'light',
							action_bar_color: '#1F3375'
						});
					}
					console.log(e.detail.data);
					break;
				case 'VKWebAppGetUserInfoResult':
					this.setState({
						fetchedUser: e.detail.data,
						load: true
					});
					break;
				case 'VKWebAppGetUserInfoFailed':
					this.setState({ load: true });
					break;
				case 'VKWebAppGeodataResult':
					if (e.detail.data.available) {
						this.setState({
							allowGeolocation: true,
							geodata: {
								lat: e.detail.data.lat,
								lng: e.detail.data.long
							},
							showResult: true
						});
					} else {
						this.setState({ allowGeolocation: false });
					}
					break;
				case 'VKWebAppGeodataFailed':
					this.setState({ allowGeolocation: false });
					break;
				case 'VKWebAppAllowNotificationsResult':
					this.setState({ allowNotification: e.detail.data.result });
					this.sendPushMessage(this.state.fetchedUser ? 'Привет, ' + this.state.fetchedUser.first_name  + '!' : 'Здравствуйте!');
					break;	
				case 'VKWebAppDenyNotificationsResult':
					this.setState({ allowNotification: e.detail.data.disabled });
					break;
				case 'VKWebAppOpenQRResult':
					window.open(e.detail.data.qr_data);
					this.setState({ test: e.detail.data.qr_data }); //check
					break;
				case 'VKWebAppOpenPayFormResult':
					if (e.detail.data.status) {
						this.setState({
							showResult: true,
							hungry: false
						});
					}
					break;
				case 'VKWebAppAllowMessagesFromGroupResult':
					if (e.detail.data.result) {
						this.setState({ subSpam: true }); //check
					} else {
						this.setState({ subSpam: false });
					}
					break;
				case 'VKWebAppJoinGroupResult':
					if (e.detail.data.result) {
						this.setState({ subGroup: true }); //check
					} else {
						this.setState({ subGroup: false });
					}
					break;
				default:
					console.log(e.detail);
			}
		});
		connect.send('VKWebAppGetClientVersion');
		connect.send('VKWebAppGetUserInfo');
	}

	logIn = () => {
		window.open("https://vk.com/app6996835");
	}

	getGeodata = () => {
		connect.send('VKWebAppGetGeodata');
	}

	getNotifications = () => {
		if (this.state.allowNotification) {
			connect.send('VKWebAppDenyNotifications');
		} 
		else {
			connect.send('VKWebAppAllowNotifications');
		}
	}

	sendPushMessage = (message) => {
		const data = new FormData();
		data.append('message', message);
		data.append('userId', this.state.fetchedUser.id);
		axios.post('/backend/pushMes.php', data);
	}

	scanQR = () => {
		connect.send('VKWebAppOpenQR');
	}
	subSpam = () => {
		connect.send("VKWebAppAllowMessagesFromGroup", {"group_id": 178245062});
	}
	subGroup = () => {
		connect.send("VKWebAppJoinGroup", {"group_id": 178245062});
	}

	getTaptic = () => {
		connect.send('VKWebAppTapticNotificationOccurred', { type: 'success' });
	}

	controlFlashlight = () => {
		if (this.state.turnFlashlight) {
			connect.send('VKWebAppFlashSetLevel', { level: 0 });
			this.setState({ turnFlashlight: false });
		}
		else {
			connect.send('VKWebAppFlashSetLevel', { level: 1 });
			this.setState({ turnFlashlight: true });
		}
	}

	feedPersik = () => {
		var self = this.state.fetchedUser.id;
		axios.get('/backend/payScript.php', {
			params: {
				api: 'getOrderId',
				user_id: self
			}
		}).then(function (response) {
			var order_id = response.data.order_id;
			var amount = response.data.amount;
			var ts = + new Date();
			var merchant_data = base64.encode(JSON.stringify({"amount":amount,"currency":"RUB","order_id":order_id,"ts":ts}));
			axios.get('/backend/payScript.php', {
				params: {
					api: 'getVKpaySign',
					data: merchant_data
				}
			}).then(function (response) {
				merchant_data = response.data.merchant_data;
				var merchant_sign = response.data.merchant_sign;
				var merchant_id = response.data.merchant_id;
				var description = response.data.description;
				var app_data = 'amount='+amount+'data={"currency":"RUB","merchant_data":"'+merchant_data+'","merchant_sign":"'+merchant_sign+'","order_id":"'+order_id+'","ts":'+ts+'}description='+description+'merchant_id='+merchant_id+'version=2';
				axios.get('/backend/payScript.php', {
					params: {
						api: 'getVKpayAppSign',
						data: app_data,
						user_id: self
					}
				}).then(function (response) {
					connect.send("VKWebAppOpenPayForm", {
						"app_id": 6996835,
						"action": "pay-to-service",
						"params": {
							"amount": amount,
							"description": description,
							"action": "pay-to-service",
							"merchant_id": merchant_id,
							"version": 2,
							"sign": response.data.app_sign,
							"data": {
								"currency": "RUB",
								"merchant_data": merchant_data,
								"merchant_sign": merchant_sign,
								"order_id": order_id,
								"ts": ts
							}
						}
					});
				});
			});
		});
	}

	go = (e) => {
		this.setState({
			showResult: false,
			activePanel: e.currentTarget.dataset.to
		});	
	}

	render() {
		if (this.state.load) {
			return (
				<View activePanel={this.state.activePanel}>
					<Welcome id="welcome" fetchedUser={this.state.fetchedUser} logIn={this.logIn} go={this.go} />
					<Start id="start" go={this.go} />
					<Registration id="registration" fetchedUser={this.state.fetchedUser} go={this.go} />
					<Geolocation id="geolocation" showResult={this.state.showResult} allowGeolocation={this.state.allowGeolocation} getGeodata={this.getGeodata} geodata={this.state.geodata} go={this.go} />
					<Notification id="notification" getNotifications={this.getNotifications} allowNotification={this.state.allowNotification} go={this.go} />
					<SubscribeSpam fetchedUser={this.state.fetchedUser} statusSub={this.state.subSpam} subSpam={this.subSpam} id="subscribe-spam" go={this.go} />
					<SubscribeGroup fetchedUser={this.state.fetchedUser} statusSub={this.state.subGroup} subGroup={this.subGroup} id="subscribe-group" go={this.go} />
					<Smartphone id="smartphone" platform={this.state.platform} scanQR={this.scanQR} getTaptic={this.getTaptic} controlFlashlight={this.controlFlashlight} turnFlashlight={this.state.turnFlashlight} go={this.go} />
					<Monetization id="monetization" fetchedUser={this.state.fetchedUser} showResult={this.state.showResult} feedPersik={this.feedPersik} go={this.go} />
					<Business id="business" go={this.go} />
					<Contacts id="contacts" go={this.go} />
				</View>
			);
		} else {
			return (
				<div className="Page">
					<section className="background_element">
						<div className="Rectangle --first"></div>
						<div className="Rectangle --second"></div>
						<div className="Rectangle --third"></div>
						<div className="Rectangle --fourth"></div>
					</section>
					<section className="content">
						<header></header>
						<main>
							<section className="messages_status">
								<article className="font_headline">
									Идентификация...
								</article>
							</section>
						</main>
						<footer></footer>
					</section>
				</div>
			);
		}
	}
}

export default App;