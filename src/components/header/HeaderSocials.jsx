import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
	return (
		<div className='HeaderSocials'>
			<a href='https://www.linkedin.com/in/rickychandrean/' target='blank' rel='noopener noreferrer'><BsLinkedin /></a>
			<a href='https://github.com/RickyChandrean/' target='blank' rel='noopener noreferrer'><BsGithub /> </a>
			<a href='https://www.instagram.com/gouw_rickyc/' target='blank' rel='noopener noreferrer'><BsInstagram /></a>
		</div>
	)
}

export default HeaderSocials