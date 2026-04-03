import React, { useState } from "react";

function Sa({ sendToParent }) {
  const [inputValue, setInputValue] = useState(""); // Local input data

  const handleClick = () => {
    // Parent এ data পাঠানো
    sendToParent(inputValue);
    setInputValue(""); // input clean করা optional
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Sa Component (Generate Data)</h2>
      <input
        type="text"
        placeholder="Type something here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleClick}>Send to Ha</button>
    </div>
  );
}

export default Sa;