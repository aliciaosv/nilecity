import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const SuggestionList = createContext()

export const useSuggestion = () => useContext(SuggestionList)

export const SuggestionsProvider =({ children }) => {
  // Hantera tillståndet för önskelistan
  const [suggestions, setSuggestions] = useState([])

  // Funktion för att lägga till en ny önskan till listan
  const addSuggestion = (suggestion) => {
    setSuggestions([...suggestions, suggestion])
  }
  // Returnera context providern och omsluter barnkomponenterna med context-värdet
  return (
    <SuggestionList.Provider value={{ suggestions, addSuggestion }}>
      {children}
    </SuggestionList.Provider>
  )
}

SuggestionsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
