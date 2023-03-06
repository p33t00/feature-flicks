import { Button, Modal, ListGroup } from 'react-bootstrap';

export default function BookingConfirm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tickets booked successfully.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*<h4>Spiderman redemption</h4>*/}
        <p>
          Thank you for spending your time with us. Below you can find your booking details:
        </p>
        <ListGroup>
          <ListGroup.Item>Movie: <span>Spiderman redemption</span></ListGroup.Item>
          <ListGroup.Item>Seats: <code>A3, A4, A5</code></ListGroup.Item>
          <ListGroup.Item>Total:</ListGroup.Item>
        </ListGroup>
        {/*<p>Seats: <code>A3, A4, A5</code></p>*/}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}