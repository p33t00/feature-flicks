import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getCategories } from '../services/MoviesApi.js';

export default function CategorySelect({selectClb}) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => setCategories(await getCategories()))()
  }, [])

  return (
    <InputGroup>
      <InputGroup.Text id="category-addon">Category: </InputGroup.Text>
      <Form.Select size="sm" onChange={event => selectClb(event.target.value)}>
        <option value={0}>All</option>
        {categories.map(c => 
          <option key={c.id} value={c.id}>{c.title}</option>)
        }
      </Form.Select>
    </InputGroup>
  );
}