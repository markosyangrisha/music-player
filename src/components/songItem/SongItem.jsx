import { Music, X } from 'lucide-react'
import React from 'react'

import './SongItem.css'

const SongItem = ({ song, deleteSongItemHandler, audioRef, togglePlay }) => {
	return (
		<div className='song-item' onClick={() => togglePlay(song.id)}>
			<div className='left-span'>
				<Music />
				<div className='song-item-about'>
					<span>{song.songName}</span>
					<span>{song.artistName}</span>
					<audio ref={audioRef} src={song.src} />
				</div>
			</div>
			<button
				onClick={() => deleteSongItemHandler(song.id)}
				className='song-item-delete'
			>
				<X />
			</button>
		</div>
	)
}

export default SongItem
