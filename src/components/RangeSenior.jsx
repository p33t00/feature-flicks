import Form from 'react-bootstrap/Form';
import './RangeSenior.css'
import { useState } from 'react'

function RangeSenior() {
  const [seniors, setSeniors] = useState(0)

  return (
    <>
      <Form.Label>How many Seniors (age 65 and above): <span>{seniors}</span></Form.Label>
      <Form.Range id="range-senior" defaultValue={0} onChange={(event) => { setSeniors(event.target.valueAsNumber); }}/>
    </>
  );
}

export default RangeSenior;