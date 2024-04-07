import { useSuggestion } from '../components/SuggestionList'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'

const Div = styled.div `
  padding: 80px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Submits  = () => {
  const { suggestions } = useSuggestion()
  return(
    <Div>
      <h3>Inskickade förslag</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Program</th>
            <th>Motivering</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((program, index) => (
            <tr key={index}>
              <td>{program.program}</td>
              <td>{program.motivation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Div>
  )
}

export default Submits
