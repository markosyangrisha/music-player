import { createContext, useEffect, useState } from 'react'

export const MusicContext = createContext(null)

export const MusicProvider = ({ children }) => {
	const [songs, setSongs] = useState([])
	const [userPlayList, setUserPlayList] = useState([])
	const [user, setUser] = useState({})
	const [finedSong, setFinedSong] = useState([])
	useEffect(() => {
		if (JSON.parse(localStorage.getItem('user')) !== null) {
			setUser(JSON.parse(localStorage.getItem('user')))
		}
	}, [])

	const state = {
		songs,
		setSongs,
		user,
		setUser,
		userPlayList,
		setUserPlayList,
		finedSong,
		setFinedSong,
	}

	return <MusicContext.Provider value={{...state}}>{children}</MusicContext.Provider>
}

export default MusicProvider
