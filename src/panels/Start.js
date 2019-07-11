import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import { Offline, Online } from 'react-detect-offline';
import spotRelax from '../img/Spot_relax.png';
import './Start.css';

const Start = ({ id, go }) => (
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
					<section className="images_st">
						<img className="SpotRelax" src={spotRelax} alt="Relax" />
					</section>
					<section className="messages_st">
						<article className="font_headline">
							Мгновенный запуск
						</article>
						<article className="mes_0_st">
						Сейчас вы находитесь в одном из приложений.<br />
						Обратили внимание, как просто сюда попасть?<br />
						Тысячи пользователей в один клик могут попасть <br />
						в ваше приложение и заказать из него ваш товар или услугу. <br />
						Волшебство, не правда ли?
						</article>
					</section>
					<section className="controls_st">
						<Button size="xl" level="secondary" onClick={go} data-to="registration">
							Хм, и правда
						</Button>
					</section>
				</main>
				<footer>
					<div className="page_label" onClick={go} data-to="welcome"></div>
					<div className="page_label --current"></div>
					<div className="page_label" onClick={go} data-to="registration"></div>
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

Start.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Start;