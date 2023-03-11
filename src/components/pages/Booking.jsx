import './Booking.css'
import AuditoriumBig from '../AuditoriumBig.jsx'
import RangeSenior from '../RangeSenior.jsx'
import RangeChildren from '../RangeChildren.jsx'
import Messenger from '../Messenger.jsx'
import Receipt from '../Receipt.jsx'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import { getSeats, getOccupiedSeats, getTicketTypes } from '../../services/MoviesApi.js'

export default function Booking() {
	const navigate = useNavigate()
	const { auditoriumId, id: screeningId } = useLocation().state.screening;

	const [showError, setShowError] = useState(false)
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

	const seatValidation = () => isSeatsValid(seatsSelected, seniors, children)

	return (
		<div className="booking">
			<h1 className="screen-side">Screen Side</h1>
			<Messenger showMsg={showError} setShowMsg={show => setShowError(show)} message="Please check number of selected seats and guests." />
			{
				(seats.length === 0 || occupiedScreenSeats.length === 0) ?
					<Spinner animation="border" variant="warning" /> :
					<AuditoriumBig seats={seats} occupiedScreeningSeats={occupiedScreenSeats} seatsBookClb={seats => {setSeatsSelected(seats)}}/>
			}
			<h3>Here you can select your seats and manage discounts.</h3>
			<RangeSenior setSeniorsClb={s => setSeniors(s)}/>
			<hr/>
			<RangeChildren setChildrenClb={c => setChildren(c)}/>
			<Button bsPrefix="btn-ff" onClick={() => {seatValidation() ? setModalShow(true) : setShowError(true)}}>Book Tickets</Button>
			<Button bsPrefix="btn-ff" variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
			{
				tickets.length > 0 ? <Receipt tickets={tickets} screening={occupiedScreenSeats} children={children} seniors={seniors} seats={seatsSelected} show={modalShow} onHide={() => setModalShow(false)} /> : ""
			}
		</div>
	)
}

function isSeatsValid(seatsSelected, seniors, children) {
	return (seatsSelected == 0) ? 
		false : 
		(seatsSelected.length - (seniors + children)) >= 0
}