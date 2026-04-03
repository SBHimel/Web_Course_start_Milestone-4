import React from "react";

function Haa({ receivedFromParent }) {
  return (
    <div>
      <h2>Haa Component (Show Clicked Button)</h2>
      {receivedFromParent ? (
        <p>{receivedFromParent}</p>
      ) : (
        <p>No button clicked yet</p>
      )}
    </div>
  );
}

export default Haa;