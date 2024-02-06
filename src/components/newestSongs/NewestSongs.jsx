import React, { useContext, useRef, useState } from 'react'
import { MusicContext } from '../../context/Context'
import NewestSongsItem from '../newestSongsItem/NewestSongsItem'
import {usePlayMusic} from '../../hooks/playMusic'
import './NewestSong.css'

const NewestSongs = () => {
	const { songs, user } = useContext(MusicContext)
	const [activeSongId, setActiveSongId] = useState(null)
	const audioRef = useRef(null)
	const togglePlay = usePlayMusic(songs, audioRef, activeSongId, setActiveSongId)

	return (
		<div className='newest-songs'>
			<h2>Newest Songs</h2>
			<div className='newest-song-scroll-bar'>
				{songs.map(song => (
					<NewestSongsItem
						key={song.id}
						{...song}
						togglePlay={togglePlay}
						isActive={activeSongId === song.id}
						audioRef={audioRef}
						user={user}
					/>
				))}
			</div>
		</div>
	)
}

export default NewestSongs
