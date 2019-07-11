import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import { Offline, Online } from 'react-detect-offline';
import '../panels/Subscribe.css';
import '../panels/Welcome.css';

function ChangeContent(props) {
	if (props.fetchedUser) {
		return (
			<footer>
				<div className="page_label" onClick={props.go} data-to="welcome"></div>
				<div className="page_label" onClick={props.go} data-to="start"></div>
				<div className="page_label" onClick={props.go} data-to="registration"></div>
				<div className="page_label" onClick={props.go} data-to="geolocation"></div>
				<div className="page_label" onClick={props.go} data-to="notification"></div>
				<div className="page_label" onClick={props.go} data-to="subscribe-spam"></div>
				<div className="page_label --current" onClick={props.go} data-to="subscribe-group"></div>
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

const SubscribeGroup = ({ id, fetchedUser, go, subGroup }) => (
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
							Подписка на группы
						</article>
						<article className="mes_0_sp">
							
						</article>
						<article className="mes_2_sp">
							Так же легко вы можете
						</article>
						<Button className="controls_cam_android --orange" size="xl" level="secondary" onClick={subGroup} >
							Подписывать пользователей на группу
						</Button>
						<article className="mes_3_sp">
							Таким образом мы подписали на свою группу<br/> 150 000 человек за два месяца.
						</article>
					</section>
					<section className="controls_wel">
                        <Button size="xl" level="secondary" onClick={go} data-to="smartphone">
							Мощно
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

SubscribeGroup.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		first_name: PropTypes.string
	}),
	go: PropTypes.func.isRequired,
	subGroup: PropTypes.func.isRequired
};

export default SubscribeGroup;