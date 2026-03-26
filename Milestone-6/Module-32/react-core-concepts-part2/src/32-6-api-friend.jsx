import { use } from "react";
import Friend from "./32-7-recap";
export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  console.log(friends);

  return (
    <div className="card">
      <h3>Friends: {friends.length}</h3>
      {/* <ul>
        {friends.map(friend => (
          <li className="card" key={friend.id}>{friend.name}</li>
        ))}
      </ul> */}

      {
        friends.map(friend =>
           <Friend key={friend.id}  friend={friend}> </Friend>)
      }
    </div>
  );
}