import Form from 'react-bootstrap/Form';
import './RangeChildren.css'
import { useState } from 'react'

function RangeSenior({setChildrenClb}) {
  const [children, setChildren] = useState(0)

  return (
    <>
      <Form.Label>How many Children (age below 12 years): <span>{children}</span></Form.Label>
      <Form.Range id="range-senior" defaultValue={0} onChange={(event) => {
        const numOfChildren = event.target.valueAsNumber
        setChildren(numOfChildren)
        setChildrenClb(numOfChildren)
      }}/>
    </>
  );
}

export default RangeSenior;