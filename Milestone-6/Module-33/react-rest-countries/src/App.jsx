
import { Suspense } from 'react'
import './App.css'
import Countries from './Compunents/Countries/Countries'

// api 
const countrisPromise =()=>{
  return fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
}

function App() {

  return (
    <>
      <Suspense fallback={<p>Nadir vai loading.......</p>}>
        <Countries countrisPromise={countrisPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
