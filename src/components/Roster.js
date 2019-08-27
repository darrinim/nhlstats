import React from 'react'
import TeamPlayer from './TeamPlayer'
import { Route, Switch, Link } from 'react-router-dom'

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
