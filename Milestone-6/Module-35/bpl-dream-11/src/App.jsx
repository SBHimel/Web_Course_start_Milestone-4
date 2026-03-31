
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/navbar/homepage/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Players from './components/navbar/players/Players';

const fetchPlayer = async()=>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  // react e parent theke data padhanu jay chil theke parent e data jay na tai coin er kaj ta ekhane kora lagche
  const [coin,setCoin] = useState(1999999)
  return (
    <>
    <Navbar coin={coin}></Navbar>
    <Banner></Banner>
    
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}>

      </Players>
    </Suspense>
    </>
  );
}

export default App
