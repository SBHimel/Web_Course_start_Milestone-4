
import './App.css'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert('I am clicked')
  }

  // most of the case e arrow function
  const handleClick3 = ()=>{
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
    <h3>Vite + React</h3>

    <Counter></Counter>

    <button onClick={handleClick}>Click Me</button>
    <button onClick={function handleClick2(){
      alert('clicked 2')
    }}>Click Me2</button>

    <button onClick={handleClick3}>Cllick me 3</button>

    <button onClick={() => alert('clicked 4')}>Cllick me 4</button>

    <button onClick={() => handleAdd5(10)}>Click 5</button>

    </>
  )
}

export default App
