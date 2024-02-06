import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import UserEntryLayout from '../components/layout/UserEntryLayout'
import HomePage from '../pages/HomePage'
import RegistrationPage from '../pages/RegistrationPage'
import SearchPage from '../pages/SearchPage'
import LoginPage from '../pages/LoginPage';

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='form' element={<h1>Form</h1>} />
					<Route path='search' element={<SearchPage />} />
				</Route>

				<Route>
					<Route path='/' element={<UserEntryLayout />} />
					<Route path='registration' element={<RegistrationPage />} />
					<Route path='login' element={<LoginPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default AppRoutes
