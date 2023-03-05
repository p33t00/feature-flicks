import { Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
import { Navbar, Container, Stack } from 'react-bootstrap'
import './App.css'
import Main from './components/pages/Main.jsx'
import Booking from './components/pages/Booking.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>Feature Flicks</Navbar.Brand>
          <Stack direction="horizontal" gap={4}>
            <div className="bg-light border">Filter 1</div>
            <div className="bg-light border">Filter 2</div>
            <div className="bg-light border">Filter 3</div>
          </Stack>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path='/' element={<Main />} exact/>
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </Container>        
    </div>
  )
}

export default App
