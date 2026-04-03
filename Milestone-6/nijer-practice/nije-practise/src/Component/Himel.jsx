import React from "react";

function Himel({ card }) {
  if (!card) {
    return <p>No card selected yet.</p>;
  }

  return (
    <div className="mt-4 p-4 border rounded bg-gray-100">
      <h2 className="font-bold text-xl">{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
}

export default Himel;