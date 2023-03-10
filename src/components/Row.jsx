import Seat from './Seat.jsx'

export default function Row({seatsInRow, occupiedSeats}) {
	return (
		<div className="row-seat">
			<span>{seatsInRow[0].rowNumber}</span>
			<div>
				{seatsInRow.map(s => <Seat key={s.seatNumber} seatId={s.seatNumber} booked={false} />)}
			</div>
		</div>
	)
}