// import PropTypes from 'prop-types'
import { useSuggestion } from '../components/SuggestionList'

const Submits  = () => {
  const { suggestions } = useSuggestion()
  return(
    <div>
      <h3>Inskickade förslag</h3>
      <ul>
        {suggestions.map((program, data) => (
          <li key={data}>
            <p>Program: {program.program}</p>
            <p>Motivering: {program.motivation}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Submits.propTypes = {
//   programs: PropTypes.arrayOf(
//     PropTypes.shape({
//       program: PropTypes.string.isRequired,
//       motivation: PropTypes.string.isRequired
//     })
//   ).isRequired
// }

export default Submits
