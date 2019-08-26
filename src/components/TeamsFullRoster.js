import React from 'react'
import Team from './Team'
import AllTeams from './AllTeams'
import Roster from './Roster'




const TeamsFullRoster = (props) => {
// console.log('this is TeamsFullRoster')


let mappedRosters = props.roster.map((roster, i) => {
  // console.log('this is TeamsFullRoster', props.roster[i].roster.roster)
  return (
    <div>
      <Roster />
    </div>
  )
})


  return (
    <div>
      {mappedRosters}
    </div>
  )
}











export default TeamsFullRoster
