import { X } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Modal.css'

const Modal = ({ preview, songName,goForm }) => {
	const navigate = useNavigate()
	return (
		<div className='modal-window'>
			<div className='modal-window-inner' onClick={e => e.stopPropagation()}>
				<X onClick={goForm} size={20} color='#242424' className='close-modal' />
				<img src={preview} alt={songName} />
				<div className='modal-window-right'>
					<h3>Start listening with a free account</h3>
					<button onClick={() => navigate('/registration')}>Sign up</button>
					<p>
						Already have an account? <Link to='/login'>Log in</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Modal
