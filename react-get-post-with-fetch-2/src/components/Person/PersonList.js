import { Table } from 'react-bootstrap'

const PersonList = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Birthday</th>
          <th>E-mail</th>
          <th>Password</th>
          <th>About Me</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => {
          return (
            <tr>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.gender}</td>
              <td>{employee.birthday}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>{employee.about}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default PersonList;
