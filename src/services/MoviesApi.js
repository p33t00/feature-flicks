async function getScreenings() { await (await fetch('/api/screenings')).json() }

// key matches movieId
async function getMovies() {
	const moviesMap = {}
	const moviesRaw = await (await fetch('/api/movies')).json()
	moviesRaw.forEach(m => {moviesMap[m.id] = m})
	return moviesMap
}

function getSeats() {
	return [null, 1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0]
}

function getRowDevisions() {
	return [6, 7, 8, 10, 10, 10, 10]
}

export { getScreenings, getMovies, getSeats, getRowDevisions }