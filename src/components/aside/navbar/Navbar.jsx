import { Home, Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className='nav'>
			<div>
				<NavLink className='nav-home' to='/'>
					<Home strokeWidth={1} size={18} />
					Home
				</NavLink>
			</div>
			<div>
				<NavLink className='nav-form' to='search'>
					<Search strokeWidth={1} size={18} />
					Search
				</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
