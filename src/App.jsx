import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container, Stack } from 'react-bootstrap'
import './App.css'
import Main from './components/pages/Main.jsx'
import Booking from './components/pages/Booking.jsx'
import CategorySelect from './components/CategorySelect.jsx'
import TimeSortSelect from './components/TimeSortSelect.jsx'

export default function App() {
  const [catId, setCatId] = useState(0)
  const [sortOrd, setSortOrd] = useState(0)

  return (
    <div className="App">
      <Navbar expand="sm" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand><Link to='/'>Feature Flicks</Link></Navbar.Brand>
          <Stack direction="horizontal" gap={4}>
            <CategorySelect selectClb={cat => setCatId(cat)} />
            <TimeSortSelect sortChangeClb={order => setSortOrd(order)} />
          </Stack>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path='/' element={<Main catId={catId} sortOrder={sortOrd}/>} exact/>
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </Container>        
    </div>
  )
}