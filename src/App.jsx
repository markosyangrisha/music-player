import { useEffect } from 'react'
import musicAction from './context/musicAction'
import AppRoutes from './routes/AppRoutes'

export const App = () => {
	const dispatchMusicData = musicAction()
	useEffect(() => {
		dispatchMusicData()
	}, [])

	return (
		<div className='wrapper'>
			<AppRoutes />
		</div>
	)
}

export default App
