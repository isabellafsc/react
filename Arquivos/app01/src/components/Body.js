import React from 'react'
import Dados from './Dados'

export default function Body() {
  const ytb = 'youtube.com/cfbcursos'

  return (
    <section>
      <h2> Curso de React</h2>
      <p> Hello World </p>

      <Dados canal="CFB Cursos" youtube={ytb} curso="React.js" />
    </section>
  )
}
