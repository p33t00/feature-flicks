export default function Row({rowLetter, seats, seatIdStart, seatsInRow}) {
	const seatsCollect = generateSeats(seatIdStart, seatsInRow, seats)

	return (
		<div className="row-seat">
			<span>{rowLetter}</span>
				<div>
					{seatsCollect.map(s => s)}
			</div>
		</div>
	)
}

function generateSeats(startSeatIdx, qtyOfSeats, seats) {
	let seatsCollect = []
	const incrementedRowSeatsIncrement = startSeatIdx + qtyOfSeats;

	while(startSeatIdx < incrementedRowSeatsIncrement) {
		const bookedClass = seats[startSeatIdx] === 0 ? "booked-seat" : ""
		seatsCollect.push(<div className={`seat ${bookedClass}`} key={startSeatIdx}>{startSeatIdx}</div>)
		startSeatIdx++
	}

	return seatsCollect
}