import { useContext } from "react";
import { MyContext } from "./MyContext";

const Bondhu = () => {
  const data = useContext(MyContext);

  return (
    <div style={{ border: "2px solid purple", padding: "10px" }}>
      <h2>Bodhu</h2>
      <h3>{data}</h3>
    </div>
  );
};

export default Bondhu;