import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import './Messenger.css'

function Messenger({showMsg}) {
  const [show, setShow] = useState(false);

  return (
    <Row className="messenger">
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={showMsg} delay={4000} autohide position="top-end">
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Messenger;