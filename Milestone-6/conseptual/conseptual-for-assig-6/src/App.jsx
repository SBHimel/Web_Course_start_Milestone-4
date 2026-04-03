
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Card from './component/Card'
import Footer from './component/Footer'
import Models from './component/Models'
import NavBar from './component/NavBar'
import Sa from './component/Sa'
import Ha from './component/Ha'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()


function App() {

  const [activeTab, setActiveTab] = useState("modal")
  console.log(activeTab)

  const [carts, setCarts] = useState([])
  console.log(carts)


  const [dataFromSa, setDataFromSa] = useState(""); // Parent state

  return (
    <>

      <h1>Parent Component (App)</h1>

      {/* Sa কে function পাঠাচ্ছি */}
      <Sa sendToParent={setDataFromSa} />

      {/* Ha কে parent state পাঠাচ্ছি */}
      <Ha receivedFromParent={dataFromSa} />


      <NavBar></NavBar>

      <Banner></Banner>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent
      ">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          defaultChecked
          onClick={() => setActiveTab("modal")}
        />

        <input type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("card")}
        />

      </div>

      {activeTab === "modal" ? <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>
        : null}

      {activeTab === "card" ?
        <Card carts={carts} setCarts={setCarts}></Card>
        : null}

      <Footer></Footer>


    </>
  )
}

export default App
