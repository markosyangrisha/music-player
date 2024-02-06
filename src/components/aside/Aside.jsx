import React from 'react'
import Navbar from './navbar/Navbar'
import SongList from './songList/SongList'
import './Aside.css'

const Aside = () => {
	return (
		<div className='aside'>
			<Navbar />
			<SongList />
		</div>
	)
}

export default Aside