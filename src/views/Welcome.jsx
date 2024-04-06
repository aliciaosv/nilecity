import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Stajl = styled.div `
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
  padding: 40px;
`

function Welcome(props) {
  return (
    <Stajl>
      <h1>Välkommen, {props.name}!</h1>
      <h4>Vill du lyssna på något kul radioprogram?</h4>
      <Link to="./Radio1">
        <Buttons variant="secondary">Jamen, det låter ju trevligt!</Buttons>
      </Link>
      <Link to="./Suggestions">
        <Buttons variant="secondary">Jag vill posta ett programförslag</Buttons>
      </Link>
      <Buttons variant="secondary">Jag vill bli överraskad</Buttons>
    </Stajl>
  )
}

Welcome.propTypes = {
  name: PropTypes.string
}

export default Welcome
