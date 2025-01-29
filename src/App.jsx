import React from 'react'
import './App.css'
import AppRouter from './routes/AppRouter';
import ScrollSidebar from './components/ScrollSidebar/ScrollSidebar';
function App() {

  return (
    <>
      <ScrollSidebar />
      <AppRouter />
    </>
  )
}

export default App
