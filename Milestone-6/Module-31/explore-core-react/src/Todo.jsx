
// export default function ToDo({task, isDone}){
//     return(
//         <li>Task: {task} </li>
//     )
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//     if (isDone === true) {
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     else {
//         return <li>Do now: {task}</li>
//     }
// }

//  consdition ? true : flase

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ?
//   <li>Done: {task} time: {time}</li>   :   <li>Not Done: {task}</li>
// }

// ------------- Logical OR (||)  ----------------
// export default function ToDo ({task, isDone, time = 0}){
//     return isDone && <li>Done Tasks: {task} time: {time}</li>
// }

// ------------- ||  ----------------
// export default function ToDo ({task, isDone, time = 0}){
//     return isDone || <li>Done Tasks: {task} time: {time}</li>
// }

// ============Conditionally Assigning JSX to a Variable
export default function ToDo({ task, isDone, time = 0 }) {
  // 1️⃣ ভেরিয়েবল ডিফাইন করা
  let displayItem;

  // 2️⃣ শর্ত অনুযায়ী JSX assign করা
  if (isDone === true) {
    displayItem = <li>Done: {task} Duration: {time}</li>;
  } else {
    displayItem = <li>Do now: {task}</li>;
  }

  // 3️⃣ return এ variable use করা
  return <>{displayItem}</>;
}


//  consdition ? true : flase

// try to understand if else easy way 🔥 Ternary Operator (টার্নারি অপারেটর)

// export default function Hungry({ eat, isEat, time}) {
//   return (
//     <li>
//       {isEat ? `I will eat: ${eat}  duration: ${time}` : `I don't like: ${eat}`}
//     </li>
//   );
// }

//  ternary operator another way

// export default function Hungry({eat, isEat, time}){
//     return isEat === true?  <li>I will eat: {eat} duration: {time}</li> : <li>I don't like: {eat}</li>
// }