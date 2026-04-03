import React from "react";

function Saaa({ sendToParent }) {
  const buttons = [
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    { id: 3, label: "Button 3" },
  ];

  const handleClick = (btn) => {
    // Clicked button এর data parent এ পাঠানো
    sendToParent(`Clicked: ${btn.label}`);
  };

  return (
    <div className="pt-20">
      <h2>Saaa Component (Buttons)</h2>
      {buttons.map((btn) => (
        <button
          key={btn.id}
          style={{ marginRight: "10px", padding: "5px 10px" }}
          onClick={() => handleClick(btn)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default Saaa;