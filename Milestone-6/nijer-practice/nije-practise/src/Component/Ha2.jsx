import React from "react";

function Ha({ receivedFromParent }) {
  return (
    <div>
      <h2>Ha: Show Random Number</h2>
      <p>{receivedFromParent}</p>
    </div>
  );
}

export default Ha;