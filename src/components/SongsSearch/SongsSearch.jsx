import React from 'react'
import SongSearchItem from '../songSearchItem/SongSearchItem'
import './SongsSearch.css'

const SearchSong = ({ foundSongs }) => {
	return (
		<div className='search-song'>
			<div className='scroll-bar'>
				{foundSongs?.map((song, index) => {
					return <SongSearchItem key={index} {...song} />
				})}
			</div>
		</div>
	)
}

export default SearchSong
