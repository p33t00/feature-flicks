import Container from 'react-bootstrap/Container'
import './AuditoriumBig.css'
import Seat from './Seat.jsx'

export default function AuditoriumBig() {
	return (
		<Container className="auditorium-big" onClick={(event) => {
			if (event.target.className === "seat") {
				colorToggle(event)
			}
		}}>
			<div className="row-seat row-A">
				<span>A</span>
				<div>
					{/*<Seat num={1} />*/}
					<div className="seat">2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
				</div>
			</div>
			<div className="row-seat row-B">
				<span>B</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
				</div>
			</div>
			<div className="row-seat row-C">
				<span>C</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
					<div>8</div>
				</div>
			</div>
			<div className="row-seat row-D">
				<span>D</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div className="booked-seat">6</div>
					<div className="booked-seat">7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
			</div>
			<div className="row-seat row-E">
				<span>E</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div className="booked-seat">6</div>
					<div className="booked-seat">7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
			</div>
			<div className="row-seat row-F">
				<span>F</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div className="booked-seat">6</div>
					<div className="booked-seat">7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
			</div>
			<div className="row-seat row-G">
				<span>G</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div className="booked-seat">6</div>
					<div className="booked-seat">7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
			</div>
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