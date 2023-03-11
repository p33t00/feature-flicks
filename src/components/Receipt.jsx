import { Button, Modal, ListGroup } from 'react-bootstrap';

  const PRICE_ADULT = 110
  const PRICE_SENIOR = 85
  const PRICE_CHILD = 75

// TODO: fetch ticket types from API


export default function BookingConfirm({screening, seats, children, seniors, onHide, show}) {
  const {movie, auditorium, screeningTime} = screening
  const adults = seats.length - seniors - children
  const totalPriceAdults = adults * PRICE_ADULT
  const totalPriceSeniors = seniors * PRICE_SENIOR
  const totalPriceChildren = children * PRICE_CHILD
  const total = totalPriceAdults + totalPriceSeniors + totalPriceChildren

  const bookingNum = Math.random().toString().slice(2)

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
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
          {adults > 0 ? <ListGroup.Item>Adults: <span>{adults} x 110 = {totalPriceAdults} SEK</span></ListGroup.Item> : ""}
          {seniors > 0 ? <ListGroup.Item>Seniors: <span>{seniors} x 85 = {totalPriceSeniors} SEK</span></ListGroup.Item> : ""}
          {children > 0 ? <ListGroup.Item>Children: <span>{children} x 75 = {totalPriceChildren} SEK</span></ListGroup.Item> : ""}
          <ListGroup.Item>Total: <span>{total} SEK</span></ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}