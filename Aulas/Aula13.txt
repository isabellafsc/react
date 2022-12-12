import React, { useState } from 'react'

export default function App() {
  // ------- EXERCÍCIO 1 -------
  const cumprimento = () => {
    const hora = new Date().getHours()
    if (hora >= 0 && hora < 13) {
      return <p> Bom dia </p>
    } else if (hora >= 13 && hora < 18) {
      return <p> Boa tarde </p>
    } else {
      return <p> Boa noite </p>
    }
  }

  // ------- EXERCÍCIO 2 -------
  const [log, setLog] = useState(false)

  // ------- EXERCÍCIO 3 -------
  const [cor, setCor] = useState(1)

  const vermelho = { color: 'red' }
  const verde = { color: 'green' }
  const azul = { color: 'blue' }

  const retornaCor = c => {
    if (c == 1) {
      return vermelho
    } else if (c == 2) {
      return verde
    } else {
      return azul
    }
  }

  const mudaCor = () => {
    setCor(cor + 1)
    if (cor > 2) {
      setCor(1)
    }
  }

  // setInterval(mudaCor,1000)

  return (
    <>
      <p>------- EXERCÍCIO 1 -------</p>
      {cumprimento()}

      <p>------- EXERCÍCIO 2 -------</p>
      <p>{log ? 'Usuário Logado' : 'Favor Logar'}</p>
      <button onClick={() => setLog(!log)}>{log ? 'Logoff' : 'Login'}</button>

      <p>------- EXERCÍCIO 3 -------</p>
      <h1 style={retornaCor(cor)}>CFB Cursos</h1>
      <button onClick={() => mudaCor()}> Muda cor </button>
    </>
  )
}
