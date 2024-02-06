import './Search.css'

const Search = ({ text, toggleSearchText }) => {
	return (
		<div className='search'>
			<h2>Search</h2>
			<input
				value={text}
				onChange={toggleSearchText}
				type='text'
				placeholder='What do you want to listen to?'
			/>
		</div>
	)
}

export default Search
