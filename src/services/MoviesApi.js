async function getScreenings() {
  try {
    return await (await fetch('/api/screenings?sort=time')).json()
  } catch(e) {
    console.erro('Error while fetching screenings:', e)
  }
}

// key matches movieId
async function getMovies() {
	const moviesMap = {}
	const moviesRaw = await (await fetch('/api/movies')).json()
	moviesRaw.forEach(m => {moviesMap[m.id] = m})
	return moviesMap
}

async function getSeats(auditoriumId) {
	const seats = await (await fetch(`/api/seats?auditoriumId=${auditoriumId}&sort=seatNumber`)).json()
	// return groupSeatsByRow(seats);
  return groupByProp(seats, 'rowNumber');
}

async function getOccupiedSeats(screeningId) {
	let seats = null
	try {
		seats = await (await fetch(`/api/occupied_seats?screeningId=${screeningId}`)).json()
	} catch(e) {
		console.erro('Error while fetching occupied seats:', e)
	}
	return seats[0];
}

async function getTicketTypes(screeningId) {
	let tickets = null
	try {
		tickets = await (await fetch('/api/ticketTypes')).json()
	} catch(e) {
		console.erro('Error while fetching ticket types:', e)
	}
	return tickets;
}

async function getCategories() {
  try {
    return await (await fetch('/api/categories?sort=title')).json()
  } catch(e) {
    console.erro('Error while fetching categories:', e)
  }
}

async function getMoviesToCat() {
  try {
    const map = await (await fetch('/api/moviesXcategories?sort=categoryId')).json()
    return groupByPropFlat(map, 'categoryId', 'movieId')
  } catch(e) {
    console.erro('Error while fetching categories:', e)
  }
}

function groupByProp(data, propName) {
  const grouped = []
  data.forEach(i => {
    if (!grouped[i[propName]]) {grouped[i[propName]] = []}
    grouped[i[propName]].push(i)
  })
  return grouped;
}

function groupByPropFlat(data, propName, flatProp) {
  const grouped = []
  data.forEach(i => {
    if (!grouped[i[propName]]) {grouped[i[propName]] = []}
    grouped[i[propName]].push(i[flatProp])
  })
  return grouped;
}

export { getScreenings, getMovies, getSeats, getOccupiedSeats, getTicketTypes, getCategories, getMoviesToCat }