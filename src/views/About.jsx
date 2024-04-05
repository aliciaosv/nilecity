import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

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
  return (
    <>
      <Wow>
        <h4>Om det här projektet</h4>
        <p>Jaha, vill du veta vad det här projektet handlar om och hur jag motiverar det? Vad handlar ens livet om?</p>
      <Buttons variant="secondary">Hmm, jag kanske bara ska lyssna på något istället.</Buttons>
      </Wow>
    </>
  )
}

export default About
