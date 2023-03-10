export default function Seat({seatId, booked}) {
	return <div className={`seat${booked ? " booked-seat" : ""}`}>{seatId}</div>
}