import { useState } from 'react'
import { Navbar, Container, Stack } from 'react-bootstrap'
import './App.css'
import Screening from './components/Screening.jsx'

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
        <Stack gap={4}>
          <Screening />
          <Screening />
        </Stack>
      </Container>
                
    </div>
  )
}

export default App
