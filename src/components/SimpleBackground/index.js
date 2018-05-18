import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from 'styled-components';

const Label = styled.label`
	width: 5rem;
`

const Input = styled.input`
 border: none;
 outline: none;
 background: rgba(255,255,255,.8);
 min-width: 5rem;
`;

const Signup = styled.a`
	margin-top: 1rem;
	background: rgba(0,0,0, .5);
	border-radius: 5px;
	color: white;
	text-decoration: none;
	@:active { color: white }
`

export default () => {
	let name, email;
	const url = 'https://sinkingcivilisations.us16.list-manage.com/subscribe/post?u=d58afda4875ebb3b07cb96aae&amp;id=b3f889846d';
	return (
		<div 
			className="flex items-center justify-center"
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				zIndex: -2,
				backgroundImage: `url(${require('../../imgs/background.jpg')})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center'
			}}>
			<div className="fixed" style={{ 
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'white',
				opacity: .0,
				zIndex: -1
			}} />
			<div className="p3" style={{ backgroundColor: 'rgba(255,255,255, .5)', maxWidth: '35rem', borderRadius: '5px' }}>
				<h1 className="my0">Sinking Civilisations</h1>
				<h3 className="mt1">Documentary Film</h3>
				<p className="mb2">Our website is still under construction but please take a look at our <a href="https://www.indiegogo.com/projects/sinking-civilisations-a-documentary-film">crowdfunding</a> campaign and subscribe to the <a href="http://eepurl.com/dvfHmD">mailing</a> list.</p>
				<div className="mt3"><Signup className="px3 py1 caps mt3" href="http://eepurl.com/dvfHmD">SIGNUP</Signup></div>
			</div>
		</div>
	)
}
