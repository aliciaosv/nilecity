// import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import About from './views/About.jsx'
import Suggestions from './views/Suggestions.jsx'
import { SuggestionsProvider } from './components/SuggestionList.jsx'
import Welcome from './views/Welcome.jsx'
import Radio1 from './views/Radio1.jsx'

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom'

function Root() {


  return(
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Welcome name="Vanja"/>, path: '/' },
        { element: <About />, path: '/about/:project' },
        { element: (
          <SuggestionsProvider>
            <Suggestions />
          </SuggestionsProvider>
        ), path: '/suggestions'},
        { element: <Radio1 />, path: '/radio1/' }
      ],
      element: <Root />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
