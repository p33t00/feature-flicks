import Seat from './Seat.jsx'

export default function Row({rowLetter, seats, seatIdStart, seatsInRow}) {
	return (
		<div className="row-seat">
			<span>{rowLetter}</span>
				<div>
					{seats.slice(seatIdStart, seatIdStart+seatsInRow)
						// First reference to seatIdStart writes into "key" and second writes into "seatId" and increments afterwards
						.map(booked => <Seat key={seatIdStart} seatId={seatIdStart++} booked={booked} />)}
			</div>
		</div>
	)
}