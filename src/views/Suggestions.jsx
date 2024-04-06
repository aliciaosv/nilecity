import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// Importerar en anpassad hook för att använda tillståndet från suggestionlist
import { useSuggestion } from '../components/SuggestionList'
import Submits from '../components/Submits'

// Provade yup-validering, för du vet, the more you fuck around, the more you're gonna find out.
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
    <div>
      <h3>Önska ett radioprogram!</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
          <Form>
            <div>
              <label htmlFor="program">Önskat program:</label>
              <Field type="text" id="program" name="program" />
              <ErrorMessage name="program" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="motivation">Motivering:</label>
              <Field as="textarea" id="motivation" name="motivation" />
              <ErrorMessage name="motivation" component="div" className="error" />
            </div>
            <button type="submit">Skicka</button>
          </Form>
      </Formik>
      {/* Renderar Submits-komponenten för att visa inskickade förslag */}
      <Submits programs={suggestedPrograms} />
    </div>
  )
}

export default Suggestions
