import './Booking.css'
import AuditoriumBig from '../AuditoriumBig.jsx'
import RangeSenior from '../RangeSenior.jsx'
import RangeChildren from '../RangeChildren.jsx'
import Receipt from '../Receipt.jsx'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import { getSeats, getOccupiedSeats, getTicketTypes } from '../../services/MoviesApi.js'

export default function Booking() {
	const navigate = useNavigate()
	const { auditoriumId, id: screeningId } = useLocation().state.screening;

	const [modalShow, setModalShow] = useState(false)
	const [seatsSelected, setSeatsSelected] = useState([])
	const [seats, setSeats] = useState([])
	const [occupiedScreenSeats, setOccupiedScreenSeats] = useState([])

	const [children, setChildren] = useState(0)
	const [seniors, setSeniors] = useState(0)
	const [tickets, setTickets] = useState([])

	useEffect(() => {
		(async () => setSeats(await getSeats(auditoriumId)))();
		(async () => setOccupiedScreenSeats(await getOccupiedSeats(screeningId)))();
		(async () => setTickets(await getTicketTypes()))();
	}, [])

	return (
		<div className="booking">
			<h1 className="screen-side">Screen Side</h1>
			{
				(seats.length === 0 || occupiedScreenSeats.length === 0) ?
					<Spinner animation="border" variant="warning" /> :
					<AuditoriumBig seats={seats} occupiedScreeningSeats={occupiedScreenSeats} seatsBookClb={seats => setSeatsSelected(seats)}/>
			}
			<h3>Here you can select your seats and manage discounts.</h3>
			<RangeSenior setSeniorsClb={s => setSeniors(s)}/>
			<hr/>
			<RangeChildren setChildrenClb={c => setChildren(c)}/>
			<Button bsPrefix="btn-ff" onClick={() => setModalShow(true)}>Book Tickets</Button>
			<Button bsPrefix="btn-ff" variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
			{
				tickets.length > 0 ? <Receipt tickets={tickets} screening={occupiedScreenSeats} children={children} seniors={seniors} seats={seatsSelected} show={modalShow} onHide={() => setModalShow(false)} /> : ""
			}
		</div>
	)
}