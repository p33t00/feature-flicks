import Container from 'react-bootstrap/Container'
import './AuditoriumBig.css'
import Row from './Row.jsx'

const seatsBooked = []

export default function AuditoriumBig({seats, occupiedScreeningSeats, seatsBookClb}) {
	const occupiedSeats = occupiedScreeningSeats.occupiedSeats.split(',').map(s => Number(s))

	return (
		<Container className="auditorium-big" onClick={(event) => {
			if (event.target.className === "seat") seatToggle(event, seatsBookClb)
		}}>
			{
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
	const seatNum = event.target.innerHTML;
	const seatIdx = seatsBooked.indexOf(seatNum)

	if (seatsBooked.indexOf(seatNum) >= 0) {
		seatsBooked.splice(seatIdx, 1)
	} else {
		seatsBooked.push(seatNum)
	}
	seatsBookClb(seatsBooked)

	// color toggle
	event.target.style.borderColor = event.target.style.borderColor === "rgb(255, 209, 0)" ? "white" : "#FFD100"
	event.target.style.color = event.target.style.color === "rgb(255, 209, 0)" ? "white" : "#FFD100"
}