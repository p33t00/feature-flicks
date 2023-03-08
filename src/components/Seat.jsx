export default function Seat({seatId, booked}) {
	return <div className={`seat${booked === 0 ? " booked-seat" : ""}`}>{seatId}</div>
}