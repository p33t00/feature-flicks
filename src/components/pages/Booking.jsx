import './Booking.css'
import AuditoriumBig from '../AuditoriumBig.jsx'
import RangeSenior from '../RangeSenior.jsx'
import RangeChildren from '../RangeChildren.jsx'
import BookingConfirm from '../BookingConfirm.jsx'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Booking() {
	const navigate = useNavigate()
	const { movieId } = useParams()
	const [modalShow, setModalShow] = useState(false)

	return (
		<div className="booking">
			<h1 className="screen-side">Screen Side</h1>
			<AuditoriumBig />
			<hr/>
			<h3>Here your can select your seats and manage discounts.</h3>
			<RangeSenior />
			<hr/>
			<RangeChildren />
			<Button className="btn-book" onClick={() => setModalShow(true)}>Book Tickets</Button>
			<Button variant="secondary" onClick={() => navigate('/')}>Cancel</Button>

			<BookingConfirm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
		</div>
	)
}