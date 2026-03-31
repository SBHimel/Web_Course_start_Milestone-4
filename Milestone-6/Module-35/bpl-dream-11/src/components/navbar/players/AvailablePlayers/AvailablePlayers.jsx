import React from 'react';
import Card from '../../../ui/Card';


const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    // console.log(players)
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    players.map((player, index) => {
                        // console.log(player, "player")
                        return (
                            <Card 
                            key={index} 
                            player={player} 
                            setCoin={setCoin} 
                            coin={coin}
                            setSelectedPlayers={setSelectedPlayers}
                            selectedPlayers={selectedPlayers}
                            ></Card>

                        )


                    })
                }
            </div>


        </div>
    );
};

export default AvailablePlayers;