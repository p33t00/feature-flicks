import './Booking.css'
import AuditoriumBig from '../AuditoriumBig.jsx'
import RangeSenior from '../RangeSenior.jsx'
import RangeChildren from '../RangeChildren.jsx'
import Receipt from '../Receipt.jsx'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Booking() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const auditoriumId = searchParams.get('audId')

	const [modalShow, setModalShow] = useState(false)
	const [seatsSelected, setSeatsSelected] = useState([])
	const [children, setChildren] = useState(0)
	const [seniors, setSeniors] = useState(0)

	if (!validateAuditoriumId(auditoriumId) ) {console.error(`Invalid auditorium id provided: "${auditoriumId}"`)}

	return (
		<div className="booking">
			<h1 className="screen-side">Screen Side</h1>
			{validateAuditoriumId(auditoriumId) ?
				// TODO : get screeningID from main page
				<AuditoriumBig auditoriumId={auditoriumId} screeningId={1} seatsBookClb={seats => setSeatsSelected(seats)}/> :
				<h2>An error occured. Please try again later or contact customer support.</h2>
			}
			<hr/>
			<h3>Here you can select your seats and manage discounts.</h3>
			<RangeSenior setSeniorsClb={s => setSeniors(s)}/>
			<hr/>
			<RangeChildren setChildrenClb={c => setChildren(c)}/>
			<Button className="btn-book" onClick={() => setModalShow(true)}>Book Tickets</Button>
			<Button variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
			<Receipt children={children} seniors={seniors} seats={seatsSelected} show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	)
}

function validateAuditoriumId(id) {return (id && id > 0 && id < 3)}