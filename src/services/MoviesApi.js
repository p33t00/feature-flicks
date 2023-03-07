async function getScreenings() { await (await fetch('/api/screenings')).json() }

// key matches movieId
async function getMovies() {
	const moviesMap = {}
	const moviesRaw = await (await fetch('/api/movies')).json()
	moviesRaw.forEach(m => {moviesMap[m.id] = m})
	return moviesMap
}

export { getScreenings, getMovies }