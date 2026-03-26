
import './App.css'
import Counter from './Counter'
import Batsman from './32-4-hooks-&-useState'
import Users from './32-6-api'
import Friends from './32-6-api-friend'
import Posts from './32-7-Posts'

import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

// friend===========
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

// async/await way te
const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();

  function handleClick() {
    alert('I am clicked')
  }

  // most of the case e arrow function
  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h4>Posts are coming.....</h4>}>

        <Posts postsPromise = {fetchPosts()}></Posts>

      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>

        <Users fetchUsers={fetchUsers}></Users>

      </Suspense>

      <Suspense fallback={<h3>Friend are coming for treat....</h3>}>

        <Friends friendsPromise={friendsPromise}></Friends>

      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('clicked 2')
      }}>Click Me2</button>

      <button onClick={handleClick3}>Cllick me 3</button>

      <button onClick={() => alert('clicked 4')}>Cllick me 4</button>

      <button onClick={() => handleAdd5(10)}>Click 5</button>

    </>
  )
}

export default App
