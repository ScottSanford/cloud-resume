import { useEffect, useState } from 'react'
import './App.css'
import Resume from './components/Resume/Resume'
import Sidebar from './components/Sidebar/Sidebar'


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
      <Sidebar />
      <Resume />
    </div>
  )
}

export default App
