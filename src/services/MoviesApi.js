async function getScreenings() { return await (await fetch('/api/screenings')).json() }

// key matches movieId
async function getMovies() {
	const moviesMap = {}
	const moviesRaw = await (await fetch('/api/movies')).json()
	moviesRaw.forEach(m => {moviesMap[m.id] = m})
	return moviesMap
}

async function getSeats(auditoriumId) {
	const seats = await (await fetch(`/api/seats?auditoriumId=${auditoriumId}&sort=seatNumber`)).json()
	// const seats = dummySeats()
	// TODO: enable api version of all methods here and remove dummy data.

	// const tmp = [{id:1,rowNumber:1,"seatNumber":1,"auditoriumId":1},{"id":2,"rowNumber":,"seatNumber":2,"auditoriumId":1},{"id":3,"rowNumber":1,"seatNumber":3,"auditoriumId":1},{"id":4,"rowNumber":1,"seatNumber":4,"auditoriumId":1},{"id":5,"rowNumber":1,"seatNumber":5,"auditoriumId":1},{"id":6,"rowNumber":1,"seatNumber":6,"auditoriumId":1},{"id":7,"rowNumber":1,"seatNumber":7,"auditoriumId":1},{"id":8,"rowNumber":1,"seatNumber":8,"auditoriumId":1},{"id":9,"rowNumber":2,"seatNumber":9,"auditoriumId":1},{"id":10,"rowNumber":2,"seatNumber":10,"auditoriumId":1},{"id":11,"rowNumber":2,"seatNumber":11,"auditoriumId":1},{"id":12,"rowNumber":2,"seatNumber":12,"auditoriumId":1},{"id":13,"rowNumber":3,"seatNumber":13,"auditoriumId":1}]
	return groupSeatsByRow(seats);
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

function groupSeatsByRow(seats) {
	const seatsGrouped = []
	seats.forEach(s => {
		if (!seatsGrouped[s.rowNumber]) {seatsGrouped[s.rowNumber] = []}
		seatsGrouped[s.rowNumber].push(s)
	})
	return seatsGrouped;
}

export { getScreenings, getMovies, getSeats, getOccupiedSeats, getTicketTypes }


function dummySeats() {
	return [
  {
    "id": 82,
    "rowNumber": 1,
    "seatNumber": 1,
    "auditoriumId": 2
  },
  {
    "id": 83,
    "rowNumber": 1,
    "seatNumber": 2,
    "auditoriumId": 2
  },
  {
    "id": 84,
    "rowNumber": 1,
    "seatNumber": 3,
    "auditoriumId": 2
  },
  {
    "id": 85,
    "rowNumber": 1,
    "seatNumber": 4,
    "auditoriumId": 2
  },
  {
    "id": 86,
    "rowNumber": 1,
    "seatNumber": 5,
    "auditoriumId": 2
  },
  {
    "id": 87,
    "rowNumber": 1,
    "seatNumber": 6,
    "auditoriumId": 2
  },
  {
    "id": 88,
    "rowNumber": 2,
    "seatNumber": 7,
    "auditoriumId": 2
  },
  {
    "id": 89,
    "rowNumber": 2,
    "seatNumber": 8,
    "auditoriumId": 2
  },
  {
    "id": 90,
    "rowNumber": 2,
    "seatNumber": 9,
    "auditoriumId": 2
  },
  {
    "id": 91,
    "rowNumber": 2,
    "seatNumber": 10,
    "auditoriumId": 2
  },
  {
    "id": 92,
    "rowNumber": 2,
    "seatNumber": 11,
    "auditoriumId": 2
  },
  {
    "id": 93,
    "rowNumber": 2,
    "seatNumber": 12,
    "auditoriumId": 2
  },
  {
    "id": 94,
    "rowNumber": 2,
    "seatNumber": 13,
    "auditoriumId": 2
  }
]
}