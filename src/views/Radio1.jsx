import React, { useState, useEffect } from 'react'

function FunRadio() {
  const ids = [2023, 2024, 2399, 104]
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const fetchRadio = () => {
      const f = ids.map(id =>
        fetch(`http://api.sr.se/api/v2/broadcasts?programid=${id}&format=json`)
        .then(response => response.json())
        )
        console.log(programs)
      Promise.all(f)
      .then(programsData => {
        setPrograms(programsData)
      })
      .catch(error => {
        console.error('Skärpning Alicia...', error)
      })
    }
    fetchRadio()
  }, [])

  return(
    <div>

      {programs.map((program, index) => (
        <div key={index}>
          <h5>Senaste avsnitten av {program.name}</h5>
          {/* En ternär operation som kollar ifall det finns avsnitt eller inte på ens valda program. */}
          {program.broadcasts.length > 0 ? (
            <ul>
              {/* Villkorlig rendering pt.2 */}
              {program.broadcasts[0] && (
                <img
                src={program.broadcasts[0].image}
                alt={program.broadcasts[0].title}
                style={{ width: '250px', height: 'auto'}}
                />

                )}
              {program.broadcasts.map((broadcast, index) => (
                <li key={index}>
                  {broadcast.title}
                </li>
              ))}
            </ul>
          ) : (
            <>
            <img
            src="src\assets\barbro.gif"
            style={{ width: '250px', height: 'auto'}}
            />
            <p>Åhnaj, det finns inga avsnitt!</p>
            </>
          )}
        </div>
      ))}
    </div>
  )

}

export default FunRadio
