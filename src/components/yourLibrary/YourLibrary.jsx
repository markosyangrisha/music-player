import React from 'react'
import { useNavigate } from 'react-router-dom'
import './YourLibrary.css'

const YourLibrary = ({ createLibrary, openLibraryModal, libraryModalRef }) => {
	const navigate = useNavigate()
	return (
		<div ref={libraryModalRef} className='your-library'>
			<h3 className='library-title'>Create your first playlist</h3>
			<p className='library-sub-text'>It's ease, we'll help you</p>
			<button onClick={createLibrary} className={`library-btn `}>
				Create playlist
			</button>
			<div className={`library-modal ${openLibraryModal ? 'active-modal': 'close-active-modal'}`}>
				<div className='triangle'></div>
				<h3 className='library-modal-title'>Create a playlist</h3>
				<p className='library-modal-sub-text'>
					Log in to create and share playlists.
				</p>
				<button
					onClick={() => navigate('/login')}
					className='library-modal-btn'
				>
					Log in
				</button>
			</div>
		</div>
	)
}

export default YourLibrary
