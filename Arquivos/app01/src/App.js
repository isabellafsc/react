import React from 'react'
import './App.css'

export default function App() {
  const textoDestaque = {
    color: 'blue',
    fontSize: '3em'
  }

  return (
    <>
      <section className='caixa'>
        <h1 style={{ color: 'red', fontSize: '5em' }}> CFB Cursos</h1>
        <h2 style={textoDestaque}>Curso de React</h2>
        <p className="texto">
          {' '}
          Se inscreva em nosso canal e nos siga no instagram
        </p>
        <a href='#' target='_blank'> Hello World</a>
      </section>
    </>
  )
}
