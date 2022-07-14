import { useEffect, useState } from 'react'
import './App.css'
import Resume from './components/Resume/Resume'
import Sidebar from './components/Sidebar/Sidebar'


function getDomain(hostname: string): string {

  // production
  if (/^resume\.scottsanford\.io$/.test(hostname)) {
    return `https://api.scottsanford.io`
  }

  // everything else (local & test env)
  return 'https://testapi.scottsanford.io'
}

const API_URL = `${getDomain(window.location.hostname)}/count`

function App(): JSX.Element {

  const [visitorCount, setVisitorCount] = useState<number>()

  useEffect(() => {
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
