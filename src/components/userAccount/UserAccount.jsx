import React, { useState, useRef } from 'react'
import { useOutsideClick } from '../../hooks/outsideClick'
import './UserAccount.css'

const UserAccount = ({ username, setUser }) => {
	const dropdownRef = useRef(null)
	const [isOpen, setOpen] = useState(false)
	useOutsideClick(dropdownRef, () => setOpen(false))	

	const firstLetterUpperCase = username[0].toUpperCase()

	const logOutHandler = () => {
		localStorage.removeItem('user')
		setUser({})
	}

	const openDropDownHandler = () => {
		setOpen(prev => !prev)
	}

	return (
		<div
			className='user-account'
			onClick={openDropDownHandler}
			ref={dropdownRef}
		>
			<div className='user-firstLetter'>
				<span>{firstLetterUpperCase}</span>
			</div>
			{isOpen && (
				<div className='user-account-dropdown'>
					<button className='log-out-btn' onClick={logOutHandler}>
						Log out
					</button>
				</div>
			)}
		</div>
	)
}

export default UserAccount
