import React from 'react'
import secondsToMMSS from '../../utility/secondsToMMSS'
import './SongSearchItem.css'
const SongSearchItem = ({ songName, preview, artistName, duration }) => {
	const formattedDuration = secondsToMMSS(duration)

	return (
		<div className='song-search-item'>
			<div className='search-left-span'>
				<img
					width={'40px'}
					height={`40px`}
					src={preview}
					alt={`song ${songName}`}
				/>
				<div className='search-song-item-about'>
					<span>{songName}</span>
					<span>{artistName}</span>
				</div>
			</div>
			<div className='search-right-span'>
				<span>{formattedDuration}</span>
			</div>
		</div>
	)
}

export default SongSearchItem
