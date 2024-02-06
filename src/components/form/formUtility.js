import { useLocation } from 'react-router-dom'

export const formUtility = () => {
	const { pathname } = useLocation()
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
	const isLocation = pathname === '/registration'
	const errorsMessage =
		pathname === '/login'
			? 'Incorrect password. Please try again'
			: 'Password must be at least 8 characters long and include uppercase, lowercase, and a number.'

	return {
		isLocation,
		errorsMessage,
		passwordRegex,
	}
}
