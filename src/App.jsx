import React from 'react'
import './App.css'
import Button from './components/Buttons/Button'
import AppRouter from './routes/AppRouter';
function App() {

  return (
    <>
      <Button name={"Learn more"}/>
      <AppRouter />
    </>
  )
}

export default App
