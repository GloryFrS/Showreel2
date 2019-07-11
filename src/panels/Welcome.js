import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import { Offline, Online } from 'react-detect-offline';
import './Welcome.css';

function ChangeContent(props) {
	if (props.fetchedUser) {
		return (
			<footer>
				<div className="page_label --current"></div>
				<div className="page_label" onClick={props.go} data-to="start"></div>
				<div className="page_label" onClick={props.go} data-to="registration"></div>
				<div className="page_label" onClick={props.go} data-to="geolocation"></div>
				<div className="page_label" onClick={props.go} data-to="notification"></div>
                <div className="page_label" onClick={props.go} data-to="subscribe-spam"></div>
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

const Welcome = ({ id, fetchedUser, logIn, go }) => (
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
					<section className="images_wel">
						<svg className="VKlogo" width="19.5%" height="19.5%" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
							<rect width="38" height="38" rx="8" fill="white" />
							<path
								d="M31.8568 26.4498C31.8241 26.3766 31.7936 26.3159 31.7653 26.2672C31.2969 25.3909 30.4017 24.3154 29.0803 23.0402L29.0524 23.011L29.0384 22.9966L29.0243 22.982H29.0101C28.4104 22.3882 28.0306 21.9889 27.8715 21.7845C27.5806 21.3951 27.5154 21.001 27.6744 20.6016C27.7868 20.2999 28.2088 19.6627 28.9396 18.6891C29.324 18.1732 29.6285 17.7596 29.8533 17.4481C31.4747 15.2092 32.1777 13.7784 31.962 13.1554L31.8783 13.0098C31.822 12.9221 31.6767 12.842 31.4427 12.7688C31.2081 12.6959 30.9083 12.6838 30.5427 12.7324L26.4942 12.7615C26.4286 12.7373 26.335 12.7396 26.213 12.7688C26.0911 12.7981 26.0302 12.8128 26.0302 12.8128L25.9597 12.8493L25.9038 12.8933C25.8569 12.9223 25.8053 12.9734 25.7491 13.0464C25.6931 13.1192 25.6462 13.2046 25.6088 13.3019C25.168 14.4797 24.6669 15.5748 24.1045 16.5871C23.7577 17.1907 23.4392 17.7138 23.1484 18.1567C22.8579 18.5995 22.6142 18.9257 22.4176 19.1349C22.2206 19.3442 22.0429 19.5119 21.8832 19.6385C21.7239 19.7653 21.6022 19.8188 21.518 19.7992C21.4335 19.7796 21.354 19.7602 21.2787 19.7408C21.1476 19.6531 21.0421 19.5339 20.9626 19.383C20.8827 19.2322 20.829 19.0423 20.8009 18.8135C20.7729 18.5846 20.7563 18.3877 20.7516 18.2222C20.7472 18.0569 20.7493 17.823 20.7588 17.5213C20.7685 17.2194 20.7729 17.0151 20.7729 16.908C20.7729 16.5381 20.7798 16.1366 20.7938 15.7034C20.8079 15.2703 20.8194 14.9271 20.829 14.6742C20.8386 14.4211 20.843 14.1534 20.843 13.8711C20.843 13.5888 20.8265 13.3674 20.7938 13.2067C20.7615 13.0462 20.7119 12.8904 20.6465 12.7394C20.5808 12.5886 20.4846 12.4719 20.3584 12.389C20.2319 12.3063 20.0746 12.2406 19.8874 12.1918C19.3907 12.0751 18.7581 12.0119 17.9895 12.0021C16.2464 11.9826 15.1264 12.0996 14.6297 12.3526C14.4329 12.4596 14.2548 12.6057 14.0956 12.7905C13.9268 13.0047 13.9033 13.1216 14.0251 13.1409C14.5875 13.2284 14.9856 13.4377 15.2199 13.7686L15.3044 13.944C15.3701 14.0705 15.4357 14.2945 15.5013 14.6157C15.5668 14.9368 15.6091 15.2921 15.6277 15.6813C15.6745 16.392 15.6745 17.0004 15.6277 17.5064C15.5808 18.0127 15.5365 18.4069 15.4942 18.6892C15.4519 18.9715 15.3887 19.2002 15.3044 19.3754C15.2199 19.5506 15.1638 19.6577 15.1356 19.6965C15.1075 19.7354 15.084 19.7599 15.0654 19.7695C14.9436 19.818 14.8169 19.8427 14.6858 19.8427C14.5545 19.8427 14.3953 19.7745 14.2079 19.6381C14.0205 19.5018 13.8261 19.3145 13.6245 19.076C13.423 18.8374 13.1957 18.504 12.9426 18.0758C12.6897 17.6475 12.4272 17.1414 12.1554 16.5574L11.9306 16.1338C11.79 15.8614 11.598 15.4646 11.3543 14.9439C11.1105 14.4231 10.8949 13.9192 10.7076 13.4325C10.6327 13.2281 10.5202 13.0725 10.3703 12.9654L10.2999 12.9215C10.2531 12.8826 10.178 12.8413 10.075 12.7974C9.97189 12.7534 9.86425 12.7219 9.75169 12.7025L5.89987 12.7316C5.50626 12.7316 5.2392 12.8242 5.09857 13.0092L5.0423 13.0967C5.01418 13.1454 5 13.2233 5 13.3304C5 13.4375 5.02811 13.5689 5.08439 13.7245C5.64669 15.0972 6.25817 16.4209 6.91885 17.6961C7.57952 18.9712 8.15363 19.9984 8.64084 20.7766C9.12815 21.5554 9.62486 22.2905 10.131 22.9814C10.6371 23.6726 10.9721 24.1155 11.136 24.3101C11.3001 24.505 11.429 24.6508 11.5227 24.7481L11.8742 25.0985C12.0992 25.3321 12.4294 25.612 12.8652 25.938C13.3011 26.2642 13.7837 26.5854 14.3132 26.902C14.8428 27.2181 15.4589 27.476 16.1619 27.6755C16.8648 27.8752 17.5489 27.9554 18.2143 27.9167H19.831C20.1589 27.8873 20.4073 27.7802 20.5761 27.5954L20.6321 27.5222C20.6697 27.4641 20.7049 27.3739 20.7374 27.2524C20.7703 27.1307 20.7866 26.9967 20.7866 26.8509C20.777 26.4324 20.8077 26.0553 20.8778 25.7195C20.9479 25.3838 21.0277 25.1307 21.1171 24.9602C21.2063 24.7899 21.3071 24.6462 21.4192 24.5297C21.5315 24.413 21.6116 24.3423 21.6586 24.3179C21.7053 24.2934 21.7425 24.2768 21.7706 24.2668C21.9956 24.189 22.2603 24.2644 22.5651 24.4933C22.8698 24.7221 23.1555 25.0045 23.4228 25.3402C23.6899 25.6762 24.0108 26.0532 24.3856 26.4716C24.7607 26.8903 25.0886 27.2015 25.3696 27.4062L25.6507 27.5814C25.8384 27.6983 26.0821 27.8054 26.382 27.9027C26.6814 28 26.9438 28.0243 27.169 27.9757L30.7677 27.9174C31.1236 27.9174 31.4006 27.8562 31.597 27.7347C31.7939 27.6131 31.9108 27.479 31.9485 27.3332C31.9862 27.1873 31.9882 27.0217 31.9557 26.8365C31.9223 26.6519 31.8895 26.5227 31.8568 26.4498Z"
								fill="#1F3375"
							/>
						</svg>
						<svg className="LunaLogo" width="26%" height="15%" viewBox="0 0 439 147" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M 6.4921875,128.47159 V 18.531255 c 0,-16.5234401 27.0312495,-16.5234401 27.0312495,0 V 128.47159 c 0,16.51669 -27.0312495,16.51669 -27.0312495,0 z"
								fill="#ffffff"
							/>
							<path
								d="m 70.46875,18.53125 c 0,-16.52344 27.03125,-16.52344 27.03125,0 V 87.4375 c 0,35.875 44.12109,35.875 44.12109,0 V 18.53125 c 0,-16.52344 27.03125,-16.52344 27.03125,0 v 79.01547 c 0,57.70328 -98.18359,57.70328 -98.18359,0 z"
								fill="#ffffff"
							/>
							<path
								d="M 205.59582,128.48051 V 18.540174 c 0,-16.5234403 27.03125,-16.5234403 27.03125,0 V 128.48051 c 0,16.51669 -27.03125,16.51669 -27.03125,0 z"
								fill="#ffffff"
							/>
							<path
								d="M 269.57422,128.48331 V 18.542973 c 0,-16.52344 27.03125,-16.52344 27.03125,0 V 128.48331 c 0,16.51669 -27.03125,16.51669 -27.03125,0 z"
								fill="#ffffff"
							/>
							<path
								d="m 333.55553,128.41613 c 0,16.52344 27.03125,16.52344 27.03125,0 V 59.509886 c 0,-35.875005 44.12109,-35.875005 44.12109,0 v 68.906244 c 0,16.52344 27.03125,16.52344 27.03125,0 V 49.400666 c 0,-57.7032854 -98.18359,-57.7032854 -98.18359,0 z"
								fill="#ffffff"
							/>
						</svg>
					</section>
					<section className="messages_wel">
						<article>
							Привет{`${ fetchedUser ? ', ' + fetchedUser.first_name : '' }`}!
						</article>
						<article className="font_headline">
							Добро пожаловать<br />
							в VK mini Apps
						</article>
						<article className="mes_0_wel">
							Мы расскажем,<br />
							что такое сервисы ВКонтакте,<br />
							что они умеют и как помогут <br />
							вашему бизнесу зарабатывать больше.
						</article>
					</section>
					<section className="controls_wel">
						<Button size="xl" level="secondary" onClick={fetchedUser ? go : logIn} data-to="start">
							{`${ fetchedUser ? 'Поехали' : 'Авторизоваться' }`}
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

Welcome.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		first_name: PropTypes.string
	}),
	logIn: PropTypes.func.isRequired,
	go: PropTypes.func.isRequired
};

export default Welcome;