import React from 'react'
import './header.css'
import CTA from './CTA'
import me5 from '../../Assets/me5.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h3>Hello I'm</h3>
				<h1>Ricky Chandrean</h1>
				<h3 className="text-light">
					Web developer
				</h3>
				<CTA />
				<HeaderSocials />
				<div className="me">
					<img src={me5} alt="me" />
				</div>

				<a href='#contact' className='scrollDown'>Scroll Down</a>
			</div>
		</header>
	)
}

export default Header