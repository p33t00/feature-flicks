import Form from 'react-bootstrap/Form';
import './RangeChildren.css'
import { useState } from 'react'

function RangeSenior() {
  const [children, setChildren] = useState(0)

  return (
    <>
      <Form.Label>How many Children (age 65 and above): <span>{children}</span></Form.Label>
      <Form.Range id="range-senior" defaultValue={0} onChange={(event) => { setChildren(event.target.valueAsNumber); }}/>
    </>
  );
}

export default RangeSenior;