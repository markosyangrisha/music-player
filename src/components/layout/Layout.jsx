import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../aside/Aside'
import Header from '../header/Header'
import '../../styles/Layout.css'


const Layout = () => {
	return (
		<>
			<Aside />
			<main className='main'>
				<Header />
				<Outlet />
			</main>
		</>
	)
}

export default Layout
