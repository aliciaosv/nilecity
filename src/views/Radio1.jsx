import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ProgDiv = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`
const ProgTitle = styled.h5`
  padding: 20px;
  text-align: center;
`
const EpList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`
const EpItem = styled.li`
  margin-top: 10px;
`
const Rip = styled.div`
  text-align: center;
  margin-top: 20px;
`

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
    <>
      <ProgTitle>Senaste nytt från favvisarna: </ProgTitle>
      <Div>
        {programs.map((program, index) => (
          <ProgDiv key={index}>
            <ProgTitle>Senaste avsnitten av {program.name}</ProgTitle>
            {/* En ternär operation som kollar ifall det finns avsnitt eller inte på ens valda program. */}
            {program.broadcasts.length > 0 ? (
              <EpList>
                {/* Villkorlig rendering pt.2 */}
                {program.broadcasts[0] && (
                  <img
                  src={program.broadcasts[0].image}
                  alt={program.broadcasts[0].title}
                  style={{ width: '250px', height: 'auto'}}
                  />

                  )}
                {program.broadcasts.map((broadcast, index) => (
                  <EpItem key={index}>
                    {broadcast.title}
                  </EpItem>
                ))}
              </EpList>
            ) : (
              <Rip>
                <img
                src="src\assets\barbro.gif"
                style={{ width: '250px', height: 'auto'}}
                />
                <p>Åhnaj, det finns inga nya avsnitt!</p>
              </Rip>
            )}
          </ProgDiv>
        ))}
      </Div>

    </>
  )

}

export default FunRadio
