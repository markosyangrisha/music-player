import { useContext } from 'react'
import axios from '../../axios/axios'
import { MusicContext } from '../Context'

export default () => {
	const { setUserPlayList } = useContext(MusicContext)

	const user = JSON.parse(localStorage.getItem('user'))

	return async () => {
		try {
			const response = await axios.get(`/users/${user.id}`)

			if (response.statusText !== 'OK') {
				throw new Error('error')
			}

			setUserPlayList(response.data.playlist)
		} catch (error) {
			console.log(error.message)
		}
	}
}
