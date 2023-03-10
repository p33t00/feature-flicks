import Seat from './Seat.jsx'

export default function Row({seatsInRow, occupiedSeats}) {
	return (
		<div className="row-seat">
			<span>{seatsInRow[0].rowNumber}</span>
			<div>
				{seatsInRow.map(s => {
					return <Seat 
						key={s.seatNumber} 
						seatId={s.seatNumber} 
						booked={occupiedSeats.indexOf(s.seatNumber) > -1} />
				})}
			</div>
		</div>
	)
}