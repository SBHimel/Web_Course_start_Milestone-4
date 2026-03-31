import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';


const Players = ({ playersPromise, setCoin, coin }) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    // console.log(players)

    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, 'setSelectedType');

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div>
            <div className='container mx-auto my-[60px]'>

                <div className='flex justify-between gap-4 items-center mb-[20px]'>
                    {selectedType === "available" ? <h2 className='font-bold text-3xl'>Available Player</h2> : <h2 className='font-bold text-3xl'>Selected Player ({selectedPlayers.length}/{players.length})</h2>}

                    <div>
                        <button
                            onClick={() => setSelectedType("available")}
                            className={`btn ${selectedType === "available" ? " bg-[#E7FE29]" : ""} rounded-r-none rounded-l-2xl`}>
                            Available
                        </button>

                        <button
                            onClick={() => setSelectedType("selected")}
                            className={`btn ${selectedType === "selected" ? " bg-[#E7FE29]" : ""} rounded-l-none rounded-r-2xl`}>
                            Selected({selectedPlayers.length})</button>
                    </div>
                </div>

                {selectedType === "available" ? (
                    <AvailablePlayers
                        players={players}
                        setCoin={setCoin}
                        coin={coin}
                        setSelectedPlayers={setSelectedPlayers}
                        selectedPlayers={selectedPlayers}
                    >
                    </AvailablePlayers>) :

                    // SelectedPlayers e padhate

                    (<SelectedPlayers 
                        selectedPlayers={selectedPlayers}

                    setSelectedPlayers={setSelectedPlayers}

                    setCoin={setCoin}
                        coin={coin}

                    ></SelectedPlayers>)}
            </div>

        </div>
    );
};

export default Players;