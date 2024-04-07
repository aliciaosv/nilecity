import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'


const Wow = styled.div `
  background-color: lightgrey;
  padding: 80px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const Buttons = styled(Button) `
  margin-top: 10px;
  margin-bottom: 10px;
`

function About() {
  const {project} = useParams()
  return (
    <>
      <Wow>
        <h4>Om {project}</h4>
        <p>Jahaja, vill du veta vad det här projektet handlar om och hur jag motiverar det? Vad handlar ens livet om?</p>
        <Link to="/">
        <Buttons variant="secondary">Fan vad deppigt! Ta mig tillbaka genast!</Buttons>
      </Link>
      </Wow>
    </>
  )
}

export default About
