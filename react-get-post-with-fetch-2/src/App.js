import { useState, useEffect } from 'react'
import AddPerson from './components/Person/AddPerson'
import PersonList from './components/Person/PersonList'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {

  const [employees, setEmployee] = useState([])

  useEffect(() => {
      loadPersonList()
  })

  const loadPersonList = async () => {
      const response = await fetch(`http://174.138.103.233/api/employees`)
      const data = await response.json()
      setEmployee(data)
  }

  return (
    <div className='App'>
        <Container fluid>
            <Row>
                <Col>
                    <AddPerson />
                </Col>
                <Col>
                    <PersonList employees={employees} />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default App;