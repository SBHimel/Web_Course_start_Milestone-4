import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]= useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const handleSingle = () => {
        const undatedRuns = runs + 1;
        setRuns(undatedRuns);
    }
    const handleFour = () => {
        const undatedRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours);
        setRuns(undatedRuns);
    }
    const handleSix = () =>{
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns(updatedRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p>Fours: {fours} </p>
            <p>Sixes: {sixes}</p>
            {
                runs> 50 && <p>Your score is above 50!</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}