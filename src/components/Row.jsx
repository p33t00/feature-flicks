export default function Row({rowDevision, seatIDs}) {
	return (
		<div className="row-seat">
			<span>A</span>
			<div>
				<div className="seat">1</div>
				<div className="seat">2</div>
				<div className="seat">3</div>
				<div className="seat">4</div>
			</div>
		</div>

		// if (rowDevision === 0) print rowSeparator
	)
}

// seatIDs = [0,   1,2,3,4,5,6,...] // 0 is NOT an ID but a placeholder, since we don't have ID 0 from DB

// rowDevision = [6, 7, 8, 0, 10, 10, 0, 10, 10]

// 65-91 === A-Z
// console.log(String.fromCharCode(65));
// row-A,...

// TODO: implement own iterable for seats. It will start iteration from 1 not from 0