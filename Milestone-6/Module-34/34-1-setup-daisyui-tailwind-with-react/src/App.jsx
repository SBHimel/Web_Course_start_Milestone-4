
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav'
import Navbar from './component/Navbar/Navbar'
import PricingOption from './component/PricingOption/PricingOption'
import ResultChart from './component/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './component/MarksChart/MarksChart'


const pricingPromise = fetch('pricingData.json')
.then(res => res.json());
const marksPromise = axios.get('marksData.json')

function App() {

  return (
    <>

      <header>
        <Navbar></Navbar>

        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}>

          </PricingOption>
        </Suspense>

        <ResultChart></ResultChart>

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <MarksChart marksPromise= {marksPromise}></MarksChart>
        </Suspense>
      </main>

    </>
  )
}

export default App
