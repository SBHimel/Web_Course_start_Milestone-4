
import './App.css'
// import ToDo from './Todo';
// import Hungry from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {
  // const time = 50;
  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jasim', 'Anwar'];

  const singers = [
    { id: 1, name: 'Dr. Tasnim zara', age: 28},
    { id: 2, name: 'Tahsan', age: 45},
    { id: 3, name: 'shuvro Deb', age: 57},
  ]

  const books = [
    {id: 1, name: 'Physics', price: 250},
    {id: 2, name: 'Chemmistry', price: 350},
    {id: 3, name: 'Math', price: 255},
    {id: 4, name: 'Biology', price: 290}
  ]



  return (
    <div>
      <h1>React Core concept</h1>
      <Library books={books}></Library>

      {
        singers.map(singer => 
        <Singer key={singer.id} singer={singer}></Singer>)
      }

      {
        actors.map(actor =>
          <Actor key={actor} actor={actor}></Actor>
        )
      }


      {/* <ToDo
        task="Learn React"
        isDone={true}
        time={time}>
      </ToDo>

      <ToDo
        task="Revise JS"
        isDone={false}>
      </ToDo>

      <ToDo
        task="Take a shower"
        isDone={true}
        time='100'>
      </ToDo> */}

      {/* <Hungry
       eat="vegitable"
       isEat={true}
       time = {time}
       >
      </Hungry>
      <Hungry
       eat="meet box"
       isEat={true}
       time = {time}
       >
      </Hungry>
      <Hungry
       eat="kola"
       isEat={false}
       time = {time}
       >
      </Hungry> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozunder" tech="JS"></Developer>
      <Developer name="Rajon" tech="python"></Developer>
      <Developer name="Shabana" tech="java"></Developer>

      <Practise try="Tailwind" devise = "Apple"></Practise>
      <Practise try="CSS" devise = "Hp"></Practise>
      <Practise try="HTML" devise = "Techno"></Practise>

      <Player name="tamim" runs="5000"></Player>
      <Player name="shakib" runs="8000"></Player> */}
    </div>
  )
}
// destructuring way
function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer:{props.name} </h3>
      <p>Technology: {props.tech}</p>

    </div>
  )
}

function Practise(props) {
  console.log(props);
  return (
    <div style={{
      border: '2px solid purple',
      borderRadius: '20px'
    }}>
      <h3>Try to Understand: {props.try}</h3>
      <p>devise: {props.devise}</p>

    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'Himel';

  const personStyle = {
    color: 'red',
    textAlign: 'right'
  }

  return (
    <p id='' title='tooltip' style={personStyle}>I am Person: {name} {age}</p>
  )
}
function Student() {
  return (
    < div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div >
  )
}

// arekta compunent
function Sport() {
  return (
    <>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>komola</li>
      </ul>
      <p>Playing nad looding</p>
    </>
  )
}


export default App
