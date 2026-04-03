import React from "react";

function Safoan({ setSelectedCard }) {
  const cards = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
  ];

    const handleClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="p-4 border rounded">
          <h2 className="font-bold">{card.title}</h2>
          <p>{card.description}</p>


          <button
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => handleClick(card)}
          >
            Select
          </button>

        </div>
      ))}
    </div>
  );
}

export default Safoan;