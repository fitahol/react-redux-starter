import React from 'react'
// import DuckImage from './assets/wechat.png'
import './home.sass'

const HomeView = () => (
	<div>
		<h4>Welcome!</h4>
		<img
			alt='This is a duck, because Redux!'
			className='duck'
			src='./assets/wechat.png' />
	</div>
)

export default HomeView
