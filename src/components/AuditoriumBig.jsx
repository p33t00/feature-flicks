import Container from 'react-bootstrap/Container'
import './AuditoriumBig.css'
import Row from './Row.jsx'
import { getSeats, getRowDevisions } from '../services/MoviesApi.js'

export default function AuditoriumBig() {
	const seats = getSeats()
	const rowDevision = getRowDevisions()

	const totalSeatsRowDevision = rowDevision.reduce((acc, current) => acc+current, 0)
	if(totalSeatsRowDevision !== (seats.length-1)) throw new Error("Total number of seats does not match total seat in row devision")

	let alphabetCode = 65
	let seatIdStart = 1

	return (
		<Container className="auditorium-big" onClick={(event) => {if (event.target.className === "seat") colorToggle(event)}}>
			{rowDevision.map(seatsInRow => {
				const rowLetter = getRowLetter(alphabetCode++)
				const row = <Row rowLetter={rowLetter} seatsInRow={seatsInRow} seatIdStart={seatIdStart} seats={seats} key={rowLetter} />
				seatIdStart += seatsInRow
				return row
			})}
		</Container>
	);
}

function colorToggle(event) {
	// const seatComputedStyle = window.getComputedStyle(event.target)
	// console.log(seatComputedStyle.borderColor)
	console.log(event.target.style.color)
	event.target.style.borderColor = event.target.style.borderColor === "rgb(255, 209, 0)" ? "white" : "#FFD100"
	event.target.style.color = event.target.style.color === "rgb(255, 209, 0)" ? "white" : "#FFD100"
}

function getRowLetter(code) { return String.fromCharCode(code) }