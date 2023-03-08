export default function Row({rowDevision, seats}) {
	let rowSeatsIncrement = 1;
	let alphabetCode = 65
	let rowLetter = ''

	return (
		<>
			{	rowDevision.map(seatsInRow => {
				rowLetter = getRowLetter(alphabetCode++)
				const seatsCollect = generateSeats(rowSeatsIncrement, seatsInRow, seats)
				rowSeatsIncrement += seatsInRow

				return (
				<div className="row-seat" key={rowLetter}>
					<span>{rowLetter}</span>
						<div>
							{seatsCollect.map(s => s)}
					</div>
				</div>)
			}) }
		</>
		// if (rowDevision === 0) print rowSeparator
	)
}

function generateSeats(startSeatIdx, qtyOfSeats, seats) {
	let seatsCollect = []
	const incrementedRowSeatsIncrement = startSeatIdx + qtyOfSeats;

	while(startSeatIdx < incrementedRowSeatsIncrement) {
		seatsCollect.push(<div className="seat" className={seats[startSeatIdx] === 0 ? "booked-seat" : ""}>{startSeatIdx}</div>)
		startSeatIdx++
	}

	return seatsCollect
}

function getRowLetter(code) { return String.fromCharCode(code) }
// seatIDs = [1,2,3,4,5,6,...] // start from 1

// rowDevision = [6, 7, 8, 0, 10, 10, 0, 10, 10]

// 65-91 === A-Z
// console.log(String.fromCharCode(65));
// row-A,...
