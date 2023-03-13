import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import './Messenger.css'

export default function Messenger({showMsg, setShowMsg, message}) {
  return (
    <Row className="messenger">
        <Toast onClose={() => setShowMsg(false)} show={showMsg} delay={4000} autohide>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
    </Row>
  );
}