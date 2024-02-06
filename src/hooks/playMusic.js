export const usePlayMusic = (songs, audioRef, activeSongId, setActiveSongId) => {
	return id => {
		if (activeSongId === id) {
			audioRef.current.pause()
			setActiveSongId(null)
		} else {
			audioRef.current.src = songs.find(song => song.id === id).src
			audioRef.current.play()
			setActiveSongId(id)
		}
	}
}
