import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axios/axios'
import { MusicContext } from '../../context/Context'
import Form from '../form/Form'

import './Registration.css'

const Registration = () => {
	const navigate = useNavigate()
	const { setUser } = useContext(MusicContext)

	const registerFormData = async data => {
		try {
			const userData = await axios.get(`/users`)

			if (userData.statusText !== 'OK') {
				throw new Error('get data error')
			}
			const isRegisterUser = userData.data.find(
				user => user.email === data.email || user.password === data.password
			)

			if (isRegisterUser) return
		} catch (error) {
			console.error(error)
		}

		const createUser = {
			id: Math.random().toString(),
			...data,
			playlist: [],
		}
		try {
			const postUser = await axios.post(`/users`, createUser)

			if (postUser.statusText !== 'Created') {
				throw new Error('post data error')
			}
			setUser(postUser.data)
			localStorage.setItem('user', JSON.stringify(createUser))
			navigate('/')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<div className='registration'>
				<div className='registration-inner'>
					<div className='registration-header'>
						<h2>Welcome back</h2>
						<p>Sign up and immerse yourself in music</p>
					</div>
					<Form onsubmit={registerFormData} />
					<Link className='go-login' to='/login'>
						Already have an account? Sign in
					</Link>
					<Link className='registration-go-home' to='/'>
						Back To Home Page
					</Link>
				</div>
			</div>
		</>
	)
}

export default Registration
