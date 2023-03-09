import { Button, Modal, ListGroup } from 'react-bootstrap';

  const PRICE_ADULT = 110
  const PRICE_SENIOR = 85
  const PRICE_CHILD = 75


export default function BookingConfirm({seats, children, seniors, onHide, show}) {
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
          <ListGroup.Item>Movie: <span>Spiderman redemption</span></ListGroup.Item>
          <ListGroup.Item>Seats: <code>{seats.join(',')}</code></ListGroup.Item>
          {adults > 0 ? <ListGroup.Item>Adults: {adults} x 110 = {totalPriceAdults} SEK</ListGroup.Item> : ""}
          {seniors > 0 ? <ListGroup.Item>Seniors: {seniors} x 85 = {totalPriceSeniors} SEK</ListGroup.Item> : ""}
          {children > 0 ? <ListGroup.Item>Children: {children} x 75 = {totalPriceChildren} SEK</ListGroup.Item> : ""}
          <ListGroup.Item>Total: {total} SEK</ListGroup.Item>
        </ListGroup>
        {/*<p>Seats: <code>A3, A4, A5</code></p>*/}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}