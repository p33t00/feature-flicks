import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function TimeSortSelect() {
  return (
    <InputGroup>
      <InputGroup.Text id="time-sort-addon">Time Sort: </InputGroup.Text>
      <Form.Select size="sm">
        <option>ASC</option>
        <option>DESC</option>
      </Form.Select>
    </InputGroup>
  );
}