import './Booking.css'
import AuditoriumBig from '../AuditoriumBig.jsx'
import RangeSenior from '../RangeSenior.jsx'
import RangeChildren from '../RangeChildren.jsx'
import BookingConfirm from '../BookingConfirm.jsx'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Booking() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const [modalShow, setModalShow] = useState(false)
	const auditoriumId = searchParams.get('audId')

	return (
		<div className="booking">
			<h1 className="screen-side">Screen Side</h1>
			{auditoriumComp(auditoriumId)}
			<hr/>
			<h3>Here your can select your seats and manage discounts.</h3>
			<RangeSenior />
			<hr/>
			<RangeChildren />
			<Button className="btn-book" onClick={() => setModalShow(true)}>Book Tickets</Button>
			<Button variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
			<BookingConfirm show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	)
}

function auditoriumComp(auditoriumId) {
	let auditorium = <h2>An error occured. Please try again later or contact customer support.</h2>
	if (!auditoriumId) {console.error(`Invalid auditorium id provided: "${auditoriumId}"`)}
	else if (auditoriumId == 1) auditorium = <h1>Sorry, but Auditorium 1 is not ready yet</h1>
	else if (auditoriumId == 2) auditorium = <AuditoriumBig />
	return auditorium
}