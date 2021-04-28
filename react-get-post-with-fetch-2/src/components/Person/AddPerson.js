import {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const AddPerson = () => {

  const [newPerson, setNewPerson] = useState({
      firstName: "",
      lastName: "",
      gender: "",
      birthday: "",
      email: "",
      password: "",
      about: ""
  })

  const { firstName, lastName, gender, birthday, email, password, about } = newPerson;

  const onInputChange = (e) => {
      setNewPerson({ ...newPerson, [e.target.name]: e.target.value })
  }

  const createPerson = async (e) => {
    let response = await fetch(`http://174.138.103.233/api/employees`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: await JSON.stringify({
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          gender: e.target.gender.value,
          birthday: e.target.birthday.value,
          email: e.target.email.value,
          password: e.target.password.value,
          about: e.target.about.value,
      })
    });
    let data = await response.json()
    return data;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    createPerson(e)
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>
                First Name
            </Form.Label>
            <Form.Control
                onChange={e => onInputChange(e)}
                name='firstName'
                type='text'
                placeholder='Normal text' />
        </Form.Group>
        <Form.Group>
            <Form.Label>
                Last Name
            </Form.Label>
            <Form.Control
                onChange={e => onInputChange(e)}
                name='lastName'
                type='text'
                placeholder='Normal text' />
        </Form.Group>
        <Form.Group>
            <Form.Label>
                Gender
            </Form.Label>
            <Form.Control
                onChange={e => onInputChange(e)}
                type='text'
                name='gender'
                placeholder='Normal text' />
        </Form.Group>
        <Form.Group>
            <Form.Label>
                Birth Day
            </Form.Label>
            <Form.Control
                onChange={e => onInputChange(e)}
                type='text'
                name='birthday'
                placeholder='Normal text' />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
            <Form.Label>
                Email address
            </Form.Label>
            <Form.Control
                onChange={e => onInputChange(e)}
                name='email'
                type='email'
                placeholder='Enter email' />
        </Form.Group>
        <Form.Group>
            <Form.Label>
                Password
            </Form.Label>
            <Form.Control
                onChange={e => onInputChange(e)}
                type='text'
                name='password'
                placeholder='Normal text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>
                About Me
            </Form.Label>
            <Form.Control
                onChange={e => onInputChange(e)}
                name='about'
                as='textarea'
                rows={3}
                placeholder='Normal text' />
        </Form.Group>
        <Button variant='primary' type='submit'>
            Submit
        </Button>
    </Form>
  )
}

export default AddPerson;
