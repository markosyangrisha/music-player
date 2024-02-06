import { useContext } from 'react'
import { MusicContext } from './Context'
import axios from '../axios/axios'

export default () => {
	const { setSongs } = useContext(MusicContext)

	return async () => {
		try {
			const response = await axios.get(`/songs`)
			if (response.statusText === 'OK') {
				setSongs(response.data)
			}
		} catch (error) {
			console.log(error.message)
		}
	}
}
