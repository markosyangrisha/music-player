import { Music, Plus } from 'lucide-react'
import React from 'react'

import './AddedMusicForm.css'

const AddedMusicForm = ({
	openAddedMusicPlus,
	addedUserPlaylist,
	setText,
	text,
	finedSong,
}) => {

	return (
		<div className='music-form-block'>
			<div className='music-form-music-name'>
				<input
					className={`added-input ${openAddedMusicPlus && 'active'}`}
					type='text'
					id='music-name'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</div>
			{finedSong?.map(song => (
				<div className='search-music-for-added' key={song.id}>
					<div className='search-music-for-added-left-part'>
						<Music size={30} />
						<div className='song-about'>
							<span>{song.songName}</span>
						</div>
					</div>
					<button onClick={() => addedUserPlaylist(song.id)}>
						<Plus />
					</button>
				</div>
			))}
		</div>
	)
}

export default AddedMusicForm
