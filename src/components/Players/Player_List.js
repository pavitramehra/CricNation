import React from 'react'
import {Link} from 'react-router-dom'
const Player_List=(props)=>{
   
    const {players}=props;
   //console.log(players)
    const playerList=players!==undefined ? players.map(player => {
        
        return(
            <div className="player card" key={player.pid}>
                <div className="card-content">
                    <Link to={"/player/"+player.pid}> <span className="player-name">{player.name}</span></Link>
                </div>
            </div>
        )
    }):null
    return(
        <div className="player-list">
            {playerList}
        </div>
    )
    
}
export default Player_List