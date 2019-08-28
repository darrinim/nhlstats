import React, {useState} from 'react'
import TeamPlayer from './TeamPlayer'
import {Redirect} from 'react-router-dom'

const Roster = (props) => {
 console.log('this is roster', props);

const [ currentPlayer, setCurrentPlayer ] = useState(null)

 // life state to Roster
 // change the state when I click on a player
 // create a ternary operator, so is this player state true? If so, then render this, if not, render all players (mappedPlayer)



 let mappedPlayer = props.details.map((player,i) => {
     return (
     <TeamPlayer

       player={player}
       setCurrentPlayer={setCurrentPlayer}
     />
     )
   })
 return(
   <div>
    { currentPlayer ? <TeamPlayer player={currentPlayer.player} playerInfo={currentPlayer.playerInfo} stats={currentPlayer.stats} setCurrentPlayer={setCurrentPlayer}/> :
     mappedPlayer}
   </div>
 )
}



export default Roster
