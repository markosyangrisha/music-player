import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MusicContext } from '../../context/Context'
import UserAccount from '../../components/userAccount/UserAccount'
import './Header.css'

const Header = () => {
	const { user, setUser } = useContext(MusicContext)

	const navigate = useNavigate()

	return (
		<header className='header'>
			{user.email ? (
				<UserAccount {...user} setUser={setUser} />
			) : (
				<div className='user-entry'>
					<Link className='sign-up' to='registration'>
						Sign up
					</Link>
					<Link className='sign-in' to='login'>
						Sign in
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header
