import React from 'react'
import TeamPlayer from './TeamPlayer'

const Roster = (props) => {
  // console.log('this is roster', props);

  let mappedPlayer = props.roster.map((player,i) => {
    return (
    <TeamPlayer
      player={player}
    />
    )
  })

  return(
    <div>{mappedPlayer}</div>
  )
}


export default Roster
