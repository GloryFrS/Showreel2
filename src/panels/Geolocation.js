import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import { Offline, Online } from 'react-detect-offline';
import persikHide from '../img/Persik_hide.png';
import './Geolocation.css';

function ChangeContent(props) {
	if (props.showResult) {
		return (
			<main>
				<section className="images_map_geo">
					<div className="StaticMap" style={{ backgroundImage: 'url(https://static-maps.yandex.ru/1.x/?ll=' + props.geodata.lng + ',' + props.geodata.lat + '&size=450,450&z=16&l=map&pt=' + props.geodata.lng + ',' + props.geodata.lat + ',org)' }} />
				</section>
				<section className="controls_map_geo">
					<Button size="xl" level="secondary" onClick={props.go} data-to="notification">
						К другим фишкам
					</Button>
				</section>
			</main>
		);
	}
	else {
		return (
			<main>
				<section className="images_geo">
					<img className="PersikHide" src={persikHide} alt="Hide?" />
				</section>
				<section className="messages_geo">
					<article className="font_headline">
						Геолокация
					</article>
					<article className="mes_0_geo">
					  	Мы можем узнать гораздо больше информации<br />
						с разрешения пользователя.<br />
						Например, местоположение.
					</article>
				</section>
				<section className="controls_geo">
					<Button size="xl" level="secondary" onClick={props.getGeodata}>
						{`${ props.allowGeolocation ? 'Найти меня на карте' : 'Нет доступа' }`}
					</Button>
					<Button className="controls_skip" level="tertiary" onClick={props.go} data-to="notification">
						К другим фишкам
					</Button>
				</section>
			</main>
		);
	}
}

const Geolocation = ({ id, showResult, allowGeolocation, getGeodata, geodata, go }) => (
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
				<ChangeContent showResult={showResult} allowGeolocation={allowGeolocation} getGeodata={getGeodata} geodata={geodata} go={go} />
				<footer>
					<div className="page_label" onClick={go} data-to="welcome"></div>
					<div className="page_label" onClick={go} data-to="start"></div>
					<div className="page_label" onClick={go} data-to="registration"></div>
					<div className="page_label --current"></div>
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

Geolocation.propTypes = {
	id: PropTypes.string.isRequired,
	showResult: PropTypes.bool.isRequired,
	allowGeolocation: PropTypes.bool.isRequired,
	getGeodata: PropTypes.func.isRequired,
	geodata: PropTypes.shape({
		lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		lng: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	}),
	go: PropTypes.func.isRequired
};

export default Geolocation;