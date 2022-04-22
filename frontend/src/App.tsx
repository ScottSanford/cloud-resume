import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

const API_URL = ' https://x534x9hk9k.execute-api.us-east-1.amazonaws.com/Prod/get'

function App() {

  const [ visitorCount, setVisitorCount ] = useState<number>()

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((document) => {
        setVisitorCount(document.Item.visitorCount)
      })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cloud Resume!!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {visitorCount && <div>Count { visitorCount }</div>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
