import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import { Offline, Online } from 'react-detect-offline';
import './Smartphone.css';
import '../panels/Subscribe.css';

function ChangeContent(props) {
	if (props.fetchedUser) {
		return (
			<footer>
				<div className="page_label" onClick={props.go} data-to="welcome"></div>
				<div className="page_label" onClick={props.go} data-to="start"></div>
				<div className="page_label" onClick={props.go} data-to="registration"></div>
				<div className="page_label" onClick={props.go} data-to="geolocation"></div>
				<div className="page_label" onClick={props.go} data-to="notification"></div>
				<div className="page_label --current" onClick={props.go} data-to="subscribe-spam"></div>
				<div className="page_label" onClick={props.go} data-to="subscribe-group"></div>
				<div className="page_label" onClick={props.go} data-to="smartphone"></div>
				<div className="page_label" onClick={props.go} data-to="monetization"></div>
				<div className="page_label" onClick={props.go} data-to="business"></div>
				<div className="page_label" onClick={props.go} data-to="contacts"></div>
			</footer>
		);
	}
	else {
		return (
			<footer></footer>
		);
	}
}

const SubscribeSpam = ({ id, fetchedUser, go, subSpam }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first"></div>
			<div className="Rectangle --second"></div>
			<div className="Rectangle --third"></div>
			<div className="Rectangle --fourth"></div>
		</section>
		<Online>
			<section className="content">
				<header></header>
				<main>
					<section className="messages_1_sp">
						<article className="font_headline --fh_sp">
							Подписка на рассылку
						</article>
						<article className="mes_0_sp">
							
						</article>
						<article className="mes_2_sp">
							В одно нажатие вы можете
						</article>
						<Button className="controls_cam_android --orange" size="xl" onClick={subSpam} level="secondary" >
							Подписывать пользователей на сообщения
						</Button>
						<article className="mes_3_sp">
							Так вы сможете выстроить цепочку писем и воронку продаж.
						</article>
						<article className="mes_4_sp">
							Кстати, открываемость сообщений ВКонтакте равняется 98% против 14% eMail-рассылок.
						</article>
					</section>
					<section className="controls_wel">
                        <Button size="xl" level="secondary" onClick={go} data-to="subscribe-group">
							Это крутой инструмент
						</Button>
					</section>
				</main>
				<ChangeContent fetchedUser={fetchedUser} go={go} />
			</section>
		</Online>
		<Offline>
			<section className="content">
				<header></header>
				<main>
					<section className="messages_status">
						<article className="font_headline">
							Ой! Интернет пропал.
						</article>
					</section>
				</main>
				<footer></footer>
			</section>
		</Offline>
	</div>
);

SubscribeSpam.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		first_name: PropTypes.string
	}),
	go: PropTypes.func.isRequired,
	subSpam: PropTypes.func.isRequired
};

export default SubscribeSpam;