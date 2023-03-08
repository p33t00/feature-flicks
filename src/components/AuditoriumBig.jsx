import Container from 'react-bootstrap/Container'
import './AuditoriumBig.css'
import Row from './Row.jsx'

const seats = [null, 1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1]

export default function AuditoriumBig() {
	return (
		<Container className="auditorium-big" onClick={(event) => {
			if (event.target.className === "seat") {
				colorToggle(event)
			}
		}}>
			<Row rowDevision={[6, 7, 8, 0, 10, 10]} seats={seats} />
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