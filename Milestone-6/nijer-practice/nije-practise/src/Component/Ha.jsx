import React from "react";

function Ha({ receivedFromParent }) {
  return (
    <div>
      <h2>Ha Component (Show Data)</h2>
      {receivedFromParent ? (
        <p>Data received: {receivedFromParent}</p>
      ) : (
        <p>No data yet...</p>
      )}
    </div>
  );
}

export default Ha;