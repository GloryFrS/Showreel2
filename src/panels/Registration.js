import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import { Offline, Online } from 'react-detect-offline';
import spotHI from '../img/Spot_HI.png';
import './Registration.css';

const Registration = ({ id, fetchedUser, go }) => (
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
					<section className="images_reg">
						<img className="SpotHI" src={spotHI} alt="HI!" />
					</section>
					<section className="messages_reg">
						<article className="font_headline">
							Отсутствие регистрации
						</article>
						<article className="messages_blue_reg">
							В сервисах не нужно регистрироваться,<br />
							каждый зашедший пользователь уже зарегистрирован.<br />
							Мы мгновенно можем узнать о нем <br />
							информацию из профиля ВКонтакте.
						</article>
						<article className="messages_weight_reg">
							Вас зовут {`${ fetchedUser.first_name ? fetchedUser.first_name + ' ' + fetchedUser.last_name : 'Юзер' }`},
							Ваша дата {`${ fetchedUser.bdate ? fetchedUser.bdate : 'скрыта' }`},
							Ваш город {`${ fetchedUser.city ? fetchedUser.city.title : 'на планете Земля' }`}.<br />
							И это далеко не все.
						</article>
					</section>
					<section className="controls_reg">
						<Button size="xl" level="secondary" onClick={go} data-to="geolocation">
							Это удобно
						</Button>
					</section>
				</main>
				<footer>
					<div className="page_label" onClick={go} data-to="welcome"></div>
					<div className="page_label" onClick={go} data-to="start"></div>
					<div className="page_label --current"></div>
					<div className="page_label" onClick={go} data-to="geolocation"></div>
					<div className="page_label" onClick={go} data-to="notification"></div>
					<div className="page_label" onClick={go} data-to="subscribe-spam"></div>
					<div className="page_label" onClick={go} data-to="subscribe-group"></div>
					<div className="page_label" onClick={go} data-to="smartphone"></div>
					<div className="page_label" onClick={go} data-to="monetization"></div>
					<div className="page_label" onClick={go} data-to="business"></div>
					<div className="page_label" onClick={go} data-to="contacts"></div>
				</footer>
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

Registration.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string
		}),
		bdate: PropTypes.string 
	}),
	go: PropTypes.func.isRequired
};

export default Registration;