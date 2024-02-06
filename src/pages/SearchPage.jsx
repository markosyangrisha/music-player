import React, { useContext, useState } from 'react'
import SearchSong from '../components/SongsSearch/SongsSearch'
import Search from '../components/search/Search'
import { MusicContext } from '../context/Context'

const SearchPage = () => {
	const [text, setText] = useState('')
	const { songs } = useContext(MusicContext)

	const toggleSearchText = event => {
		setText(event.target.value)
	}

	const foundSongs = songs?.filter(
		song =>
			song?.songName.toLowerCase().includes(text.toLowerCase()) ||
			song?.artistName.toLowerCase().includes(text.toLowerCase())
	) || state

	return (
		<>
			<Search toggleSearchText={toggleSearchText} text={text} />
			{foundSongs.length > 0 ? (
				<SearchSong foundSongs={foundSongs} />
			) : (
				<p>No songs found.</p>
			)}
		</>
	)
}

export default SearchPage
