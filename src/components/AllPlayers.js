import React from 'react'
import Roster from './Roster'



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
