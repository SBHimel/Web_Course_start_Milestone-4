import React, { useState } from "react";
import Sa from "./Component/Sa";
import Ha from "./Component/Ha";
import Sa2 from "./Component/Sa2";
import Ha2 from "./Component/Ha2";
import Saaa from "./Component/Saaa";
import Haa from "./Component/Haaa";

import Safoan from "./Component/Safoan";
import Himel from "./Component/Himel";
// import Sa from "./Sa"; // Data generate component
// import Ha from "./Ha"; // Data show component

function App() {

  const [selectedCard, setSelectedCard] = useState(null); // clicked card



  const [dataFromSa, setDataFromSa] = useState(""); // Parent state


  const [countFromSa, setCountFromSa] = useState(0);


  // Parent এ state, যা clicked button info রাখবে
  const [clickedData, setClickedData] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

{/* Safoan  কে function পাঠাচ্ছি  eta theke data parent e anbo*/}
      <Safoan setSelectedCard={setSelectedCard} />

      <Himel card={selectedCard} />




      <h1>Parent Component (App)</h1>

      {/* Sa কে function পাঠাচ্ছি */}
      <Sa sendToParent={setDataFromSa} />

      <hr />

      {/* Ha কে parent state পাঠাচ্ছি */}
      <Ha receivedFromParent={dataFromSa} />




      <h1>Counter Example</h1>
      <Sa2 sendToParent={setCountFromSa} />
      <Ha2 receivedFromParent={countFromSa} />



      <h1>Button Click Data Flow Example</h1>

      {/* Saaa component কে callback পাঠানো */}
      <Saaa sendToParent={setClickedData} />

      <hr />

      {/* Haa component কে clicked data পাঠানো */}
      <Haa receivedFromParent={clickedData} />
    </div>
  );
}

export default App;