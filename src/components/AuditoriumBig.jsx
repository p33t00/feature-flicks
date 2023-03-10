import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import './AuditoriumBig.css'
import Row from './Row.jsx'
import { getSeats, getOccupiedSeats } from '../services/MoviesApi.js'

const seatsBooked = []

export default function AuditoriumBig({auditoriumId, screeningId, seatsBookClb}) {
	const [seats, setSeats] = useState([])
	const [occupiedSeats, setOccupiedSeats] = useState([])
	
	useEffect(() => {
		(async () => setSeats(await getSeats(auditoriumId)))();
		(async () => setOccupiedSeats(await getOccupiedSeats(screeningId)))();
	}, [])

	return (
		<Container className="auditorium-big" onClick={(event) => {
			if (event.target.className === "seat") seatToggle(event, seatsBookClb)
		}}>
			{seats.map(seatsInRow => {
				if (seatsInRow.length > 0) {
					// TODO: shorted this {...occupiedSeats}
					const row = <Row seatsInRow={seatsInRow} occupiedSeats={occupiedSeats} key={seatsInRow[0].rowNumber} />
					return row
				}
			})}
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