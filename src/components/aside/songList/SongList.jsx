import { ListMusic, PlusCircle } from 'lucide-react'
import { useContext, useEffect, useRef, useState } from 'react'
import axios from '../../../axios/axios'
import { MusicContext } from '../../../context/Context'
import userPlaylistAction from '../../../context/userPlaylistActions/userPlaylistAction'
import userPlaylistSearchAction from '../../../context/userPlaylistActions/userPlaylistSearchAction'
import { useOutsideClick } from '../../../hooks/outsideClick'
import AddedMusicForm from '../../addedMusicForm/AddedMusicForm'
import SongItem from '../../songItem/SongItem'
import YourLibrary from '../../yourLibrary/YourLibrary'

import { usePlayMusic } from '../../../hooks/playMusic'
import './SongList.css'

const SongList = () => {
	const {
		songs,
		user,
		setUserPlayList,
		userPlayList,
		setFinedSong,
		finedSong,
	} = useContext(MusicContext)
	const [text, setText] = useState('')
	const [openLibraryModal, setOpenPlaylistModal] = useState(false)
	const [openAddedMusic, setOpenAddedMusic] = useState({
		isActive: false,
		message: 'Click on the plus',
	})
	const [openAddedMusicPlus, setOpenAddedMusicPlus] = useState(false)
	const libraryModalRef = useRef()
	const audioRef = useRef()
	const dispatchUserPlaylist = userPlaylistAction()
	const dispatchUserPlaylistSearchAction = userPlaylistSearchAction()
	useOutsideClick(libraryModalRef, () => setOpenPlaylistModal(false))
	const [activeSongId, setActiveSongId] = useState(null)
	const togglePlay = usePlayMusic(
		songs,
		audioRef,
		activeSongId,
		setActiveSongId
	)

	useEffect(() => {
		dispatchUserPlaylist()
		const time = setTimeout(() => {
			dispatchUserPlaylistSearchAction(text)
		}, 500)
		return () => clearTimeout(time)
	}, [text])

	const createLibrary = async () => {
		if (!user.email) {
			setOpenPlaylistModal(true)
		} else if (user.email && userPlayList.length === 0) {
			setOpenAddedMusic({
				...openAddedMusic,
				isActive: true,
			})
		}
	}

	const openAddedMusicPlusHandler = () => {
		if (user.email && userPlayList.length >= 0) {
			setOpenAddedMusicPlus(true)
			setOpenAddedMusic({
				...openAddedMusic,
				message: 'In input enter the name of the song',
			})
		}
	}

	const addedUserPlaylist = async id => {
		const isFined = userPlayList.find(song => song.id === id)
		if (isFined) {
			return
		}

		const newPlayList = {
			...user,
			playlist: [...userPlayList, ...finedSong],
		}
		await axios.put(`users/${user.id}`, newPlayList)

		setFinedSong([])
		setUserPlayList([...userPlayList, ...finedSong])
		setText('')
	}

	const deleteSongItemHandler = async id => {
		const deletedSong = userPlayList.filter(el => el.id !== id)

		const newPlayList = {
			...user,
			playlist: deletedSong,
		}

		await axios.put(`users/${user.id}`, newPlayList)
		setUserPlayList(userPlayList.filter(song => song.id !== id))
	}

	return (
		<div className='song-list'>
			<div className='song-control'>
				<div className='nota-library'>
					<ListMusic color='#686666' />
					<p>Your Library</p>
				</div>
				<PlusCircle
					onClick={openAddedMusicPlusHandler}
					className='added-music-btn'
				/>
			</div>
			{openAddedMusicPlus && (
				<AddedMusicForm
					addedUserPlaylist={addedUserPlaylist}
					openAddedMusicPlus={openAddedMusicPlus}
					finedSong={finedSong}
					setText={setText}
					text={text}
				/>
			)}
			{user.email && userPlayList?.length > 0 ? (
				<div className='scroll-bar'>
					{userPlayList?.map((song, index) => {
						return (
							<SongItem
								key={index}
								song={song}
								deleteSongItemHandler={deleteSongItemHandler}
								audioRef={audioRef}
								togglePlay={togglePlay}
							/>
						)
					})}
				</div>
			) : openAddedMusic.isActive ? (
				<p className='open-added-music-message'>{openAddedMusic.message}</p>
			) : (
				<YourLibrary
					createLibrary={createLibrary}
					openLibraryModal={openLibraryModal}
					libraryModalRef={libraryModalRef}
				/>
			)}
		</div>
	)
}

export default SongList
