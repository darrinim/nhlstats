import React from 'react'
import Team from './Team'
import AllTeams from './AllTeams'
import Roster from './Roster'
import { Route, Switch, Link } from 'react-router-dom'




const AllPlayers = (props) => {
console.log('this is AllPlayers', props)


let mappedRosters = props.roster.map((roster, i) => {
  // console.log('this is AllPlayers', props.roster[i].roster.roster)
  return (
    <div>
      <Roster
        roster={roster.roster.roster}
      />
    </div>
  )
})


  return (
    <div>
      {mappedRosters}
    </div>
  )
}











export default AllPlayers
