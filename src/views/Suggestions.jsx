import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// Importerar en anpassad hook för att använda tillståndet från suggestionlist
import { useSuggestion } from '../components/SuggestionList'
import Submits from '../components/Submits'
import styled from 'styled-components'

const Div = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const StyledForm = styled(Form)`
  width: 400px;
  margin: auto;
`;
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;
const StyledError = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;
const StyledButton = styled.button`
  background-color: lightgrey;
  color: black;
  margin-top: 10px;
  padding: 8px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Provade yup-validering, kul ju.
const validationSchema = Yup.object().shape({
  program: Yup.string().required('Fyll i programmet du vill önska'),
  motivation: Yup.string().required('Fyll i en jäkligt bra motivering'),
})

const Suggestions = () => {
  // Anpassad hook för att hämta tillstånd från SuggestionList-komponenten
  const { addSuggestion } = useSuggestion()
  const [suggestedPrograms, setSuggestedPrograms] = useState([])

  const initialValues = {
    program: '',
    motivation: '',
  }

  // Funktion som körs när formuläret skickas
  const onSubmit = (values, { resetForm }) => {
    addSuggestion(values)
    console.log(values)
    resetForm()
  }

  return (
    <Div>
      <h3>Önska ett radioprogram!</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
          <StyledForm>
            <div>
              <StyledLabel htmlFor="program">Önskat program:</StyledLabel>
              <Field type="text" id="program" name="program" />
              <StyledError name="program" component="div" className="error" />
            </div>
            <div>
              <StyledLabel htmlFor="motivation">Motivering:</StyledLabel>
              <Field as="textarea" id="motivation" name="motivation" />
              <StyledError name="motivation" component="div" className="error" />
            </div>
            <StyledButton type="submit">Skicka</StyledButton>
          </StyledForm>
      </Formik>
      {/* Renderar Submits-komponenten för att visa inskickade förslag */}
      <Submits programs={suggestedPrograms} />
    </Div>
  )
}

export default Suggestions
