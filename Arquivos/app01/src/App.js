/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Imagem1 from './components/imgs/imagem1.png'

export default function App() {
  function hello() {
    return 'Hello World'
  }

  const canal = () => {
    return 'CFB Cursos'
  }

  const curso = 'Curso de React'

  return (
    <>
      <section>
        <header>
          <p> {hello()}</p>
          <br />
          <p>Canal: {canal()}</p>
          <p> {'Curso: ' + curso}</p>
        </header>

        <section>
          {/* pasta src */}
          <img src={Imagem1} />
          {/* pasta public */}
          <img src="/imagem2.png" />
        </section>
      </section>
    </>
  )
}
