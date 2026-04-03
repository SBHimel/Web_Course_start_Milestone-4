import React from "react";

function Sa({ sendToParent }) {
  const handleClick = () => {
    sendToParent(Math.floor(Math.random() * 100)); // Random number generate
  };

  return (
    <div className="pt-16">
      <h2>Sa: Generate Random Number</h2>
      <button onClick={handleClick}>Send to Ha</button>
    </div>
  );
}

export default Sa;