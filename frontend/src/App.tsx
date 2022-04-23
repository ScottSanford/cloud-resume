import { useEffect, useRef, useState } from 'react'
import './App.css'
import Resume from './components/Resume/Resume'
import Sidebar from './components/Sidebar/Sidebar'


const API_URL = 'https://x534x9hk9k.execute-api.us-east-1.amazonaws.com/Prod/get'

function App() {

  const [visitorCount, setVisitorCount] = useState<number>()
  const isInitialRender = useRef(true)

  useEffect(() => {
    // prevent useEffect from being called twice
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }
    fetch(API_URL)
      .then((response) => response.json())
      .then((document) => {
        setVisitorCount(document.Attributes.visitorCount)
      })

  }, [])

  return (
    <div className="App">
      <Sidebar />
      <Resume visits={visitorCount} />
    </div>
  )
}

export default App
