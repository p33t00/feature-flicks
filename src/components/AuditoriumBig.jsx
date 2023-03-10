import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import './AuditoriumBig.css'
import Row from './Row.jsx'
import { getSeats, getOccupiedSeats } from '../services/MoviesApi.js'

const seatsBooked = []
let occupiedSeats = []

export default function AuditoriumBig({auditoriumId, screeningId, seatsBookClb}) {
	const [seats, setSeats] = useState([])
	const [screeningSeats, setScreeningSeats] = useState([])
	
	useEffect(() => {
		(async () => setSeats(await getSeats(auditoriumId)))();

		getOccupiedSeats(screeningId)
		.then(data => {
				setScreeningSeats(data)
				occupiedSeats = data[0].occupiedSeats.split(',').map(s => Number(s))
		});
	}, [])

	return (
		<Container className="auditorium-big" onClick={(event) => {
			if (event.target.className === "seat") seatToggle(event, seatsBookClb)
		}}>
			{
				(seats.length === 0 || screeningSeats.length === 0) ?
					<Spinner animation="border" variant="warning" /> :
					seats.map(seatsInRow => {
						if (seatsInRow.length > 0) {
						return <Row seatsInRow={seatsInRow} occupiedSeats={occupiedSeats} key={seatsInRow[0].rowNumber} />
					}
				})
			}
		</Container>
	)
}

function seatToggle(event, seatsBookClb) {
	// const seatComputedStyle = window.getComputedStyle(event.target)
	// console.log(seatComputedStyle.borderColor)
	const seatNum = event.target.innerHTML;
	const seatIdx = seatsBooked.indexOf(seatNum)

	if (seatsBooked.indexOf(seatNum) >= 0) {
		seatsBooked.splice(seatIdx, 1)
	} else {
		seatsBooked.push(seatNum)
	}
	// console.log(seatsBookClb)
	seatsBookClb(seatsBooked)

	// color toggle
	event.target.style.borderColor = event.target.style.borderColor === "rgb(255, 209, 0)" ? "white" : "#FFD100"
	event.target.style.color = event.target.style.color === "rgb(255, 209, 0)" ? "white" : "#FFD100"
}