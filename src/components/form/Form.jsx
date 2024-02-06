import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formUtility } from './formUtility'
import './Form.css'

const Form = ({ onsubmit }) => {
	const [eye, setEye] = useState(false)

	const { errorsMessage, isLocation, passwordRegex } = formUtility()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const openPasswordEyeHandler = () => setEye(prev => !prev)

	return (
		<div className='form-content'>
			<form onSubmit={handleSubmit(onsubmit)} className='username form-content'>
				{isLocation && (
					<div className=' form-content-input-block'>
						<label htmlFor='first Name'>Your Firs Name</label>
						<input
							id='username'
							placeholder='Your first name'
							type='text'
							{...register('username', {
								required: 'fields are required',
							})}
						/>
						<p>
							{errors?.username && (
								<p className='is-valid'>
									{errors?.username?.message}
								</p>
							)}
						</p>
					</div>
				)}
				<div className='email form-content-input-block'>
					<label htmlFor='email'>Email Address</label>
					<input
						id='email'
						placeholder='Your email address'
						{...register('email', {
							required: 'fields are required',
						})}
					/>
					<p>
						{errors?.email && (
							<p className='is-valid'>
								{errors?.email?.message}
							</p>
						)}
					</p>
				</div>
				<div className='form-content-input-block'>
					<label htmlFor='password'>Your password</label>
					<div className='password'>
						<input
							type={`${eye ? 'text' : 'password'}`}
							id='password'
							placeholder='Your password'
							{...register('password', {
								required: true,
								pattern: {
									value: passwordRegex,
									message: errorsMessage,
								},
							})}
						/>
						{eye ? (
							<Eye
								onClick={openPasswordEyeHandler}
								className='password-eye'
								color='#606060'
								size={20}
							/>
						) : (
							<EyeOff
								onClick={openPasswordEyeHandler}
								className='password-eye'
								color='#606060'
								size={20}
							/>
						)}
					</div>
					<p>
						{errors?.password && (
							<p className='is-valid'>{errors?.password?.message}</p>
						)}
					</p>
				</div>
				<button className='form-btn'>
					{isLocation ? 'Sign Up' : 'Sign In'}
				</button>
			</form>
		</div>
	)
}

export default Form
