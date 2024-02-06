import { useContext } from 'react'
import axios from '../../axios/axios'
import { MusicContext } from '../Context'

export default () => {
	const { setFinedSong } = useContext(MusicContext)

	return async text => {
		try {
			if (text.length > 0) {
				const response = await axios.get(`/songs?songName=${text}`)
				setFinedSong(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}
}
