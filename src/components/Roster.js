import React, {useState} from 'react'
import TeamPlayer from './TeamPlayer'

const Roster = (props) => {

const [ currentPlayer, setCurrentPlayer ] = useState(null)


 let mappedPlayer = props.details.map((player,i) => {
     return (
     <TeamPlayer
      player={player}
       setCurrentPlayer={setCurrentPlayer}
     />
     )
   })
 return(
   <div className="PlayersAllContainer">
    { currentPlayer ? <TeamPlayer player={currentPlayer.player} playerInfo={currentPlayer.playerInfo} stats={currentPlayer.stats} setCurrentPlayer={setCurrentPlayer}/> :
     mappedPlayer}
   </div>
 )
}



export default Roster
