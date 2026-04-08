import { MyContext } from "./MyContext";
import Baba from "./Baba";

const Grandpa = () => {
  const message = "Bodhu tumi kemon acho? 😄";

  return (
    <MyContext.Provider value={message}>
      <div style={{ border: "2px solid red", padding: "10px" }}>
        <h2>Grandpa</h2>
        <Baba />
      </div>
    </MyContext.Provider>
  );
};

export default Grandpa;