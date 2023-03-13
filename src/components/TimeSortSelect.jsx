import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function TimeSortSelect({sortChangeClb}) {
  return (
    <InputGroup>
      <InputGroup.Text id="time-sort-addon">Time Sort: </InputGroup.Text>
      <Form.Select size="sm" onChange={event => sortChangeClb(event.target.value) }>
        <option value={0}>ASC</option>
        <option value={1}>DESC</option>
      </Form.Select>
    </InputGroup>
  );
}
