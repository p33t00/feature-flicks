import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getCategories } from '../services/MoviesApi.js';

export default function CategorySelect() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => setCategories(await getCategories()))()
  }, [])

  return (
    <InputGroup>
      <InputGroup.Text id="category-addon">Category: </InputGroup.Text>
      <Form.Select size="sm">
        {categories.map(c => 
          <option key={c.id}>{c.title}</option>)
        }
      </Form.Select>
    </InputGroup>
  );
}