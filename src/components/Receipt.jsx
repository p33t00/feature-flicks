import { Button, Modal, ListGroup } from 'react-bootstrap';
import './Receipt.css'

export default function BookingConfirm({tickets, screening, seats, children, seniors, onHide, show}) {
  tickets = ticketNameToKey(tickets)

  const {movie, auditorium, screeningTime} = screening
  const adults = seats.length - seniors - children
  const totalPriceAdults = adults * tickets.adult.price
  const totalPriceSeniors = seniors * tickets.senior.price
  const totalPriceChildren = children * tickets.child.price
  const total = totalPriceAdults + totalPriceSeniors + totalPriceChildren

  const bookingNum = Math.random().toString().slice(2)

  return (
    <Modal
      id="receipt"
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Your booking #: {bookingNum}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Thank you for spending your time with us. Below you can find your booking details:
        </p>
        <ListGroup>
          <ListGroup.Item>Movie: <code>{movie}</code></ListGroup.Item>
          <ListGroup.Item>Data & Time: <code>{screeningTime}</code></ListGroup.Item>
          <ListGroup.Item>Auditorium: <code>{auditorium}</code></ListGroup.Item>
          <ListGroup.Item>Seats: <code>{seats.join(',')}</code></ListGroup.Item>
          {adults > 0 ? <ListGroup.Item>Adults: <span>{adults} x {tickets.adult.price} = {totalPriceAdults} SEK</span></ListGroup.Item> : ""}
          {seniors > 0 ? <ListGroup.Item>Seniors: <span>{seniors} x {tickets.senior.price} = {totalPriceSeniors} SEK</span></ListGroup.Item> : ""}
          {children > 0 ? <ListGroup.Item>Children: <span>{children} x {tickets.child.price} = {totalPriceChildren} SEK</span></ListGroup.Item> : ""}
          <ListGroup.Item>Total: <span>{total} SEK</span></ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button bsPrefix="btn-ff" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ticketNameToKey(tickets) {
  const mapped = {}
  tickets.forEach(t => {mapped[t.name.toLowerCase()] = t});
  return mapped;

}