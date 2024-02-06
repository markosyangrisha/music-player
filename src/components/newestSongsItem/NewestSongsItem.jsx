import { Pause, Play } from 'lucide-react'
import { useRef, useState } from 'react'
import { useOutsideClick } from '../../hooks/outsideClick.js'
import Modal from '../modal/Modal.jsx'
import './NewestSongsItem.css'

const NewestSongsItem = ({
	preview,
	songName,
	artistName,
	id,
	src,
	audioRef,
	togglePlay,
	isActive,
	user,
}) => {
	const [openModal, setOpenModal] = useState(false)
	const modalRef = useRef()
	useOutsideClick(modalRef, () => setOpenModal(false))

	const goForm = () => {
		setOpenModal(prev => !prev)
	}

	return (
		<>
			<div
				ref={modalRef}
				onClick={user.email ? () => togglePlay(id) : goForm}
				className={`newest-song-item ${isActive && 'isPlay'}`}
			>
				<img src={preview} alt={`newest song ${songName}`} />
				<div className='about-song'>
					<div className='newest-song-item-inner'>
						<span className='about-song-name'>{songName}</span>
						<span className='about-artist-name'>{artistName}</span>
					</div>
					<audio ref={audioRef} src={src} />
					{isActive ? <Pause /> : <Play />}
				</div>
			</div>
			{openModal && (
				<Modal goForm={goForm} preview={preview} songName={songName} />
			)}
		</>
	)
}

export default NewestSongsItem
