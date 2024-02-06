import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import MusicProvider from './context/Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<MusicProvider>
			<App />
		</MusicProvider>
	</BrowserRouter>
)
