import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axios/axios'
import { MusicContext } from '../../context/Context'
import Form from '../form/Form'
import './Login.css'

const Login = () => {
	const navigate = useNavigate()
	const { setUser } = useContext(MusicContext)

	const loginFormData = async data => {
		try {
			const userData = await axios.get(`/users`)
			if (userData.statusText !== 'OK') {
				throw new Error('login error')
			}

			const isRegisterUser = userData.data.find(
				user => user.email === data.email && user.password === data.password
			)

			if (isRegisterUser) {
				setUser(isRegisterUser)
				localStorage.setItem('user', JSON.stringify(isRegisterUser))
				navigate('/')
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='login'>
			<div className='login-inner'>
				<div className='login-header'>
					<h2>Welcome back</h2>
					<p>Login into your account</p>
				</div>
				<Form onsubmit={loginFormData} />
				<Link className='go-registration' to='/registration'>
					Don't have an account? Sign Up
				</Link>
				<Link className='login-go-home' to='/'>
					Back To Home Page
				</Link>
			</div>
		</div>
	)
}

export default Login
