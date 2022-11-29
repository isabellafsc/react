import React from 'react'
import Dados from './Dados'

export default function Body() {
  const ytb = 'youtube.com/cfbcursos'

  const cnl = () => {
    return 'CFB Cursos'
  }

  const somar = (v1, v2) => {
    return v1 + v2
  }

  return (
    <section>
      <h2> Curso de React</h2>
      <p> Hello World </p>

      <Dados canal={cnl} youtube={ytb} curso="React.js" somar={somar} />
    </section>
  )
}
