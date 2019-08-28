import React from 'react'
import Roster from './Roster'




const TeamRoster = (props) => {
console.log('this is TeamRos props', props)


// let mappedRosters = props.teamDetails.person.map((roster, i) => {
//   // console.log('this is TeamDetails', props.roster[i].roster.roster)
//   return (
//     <div>
//       <Roster details={props.roster[i].roster.roster} />
//     </div>
//   )
// })


  return (
    <div>
       <Roster name={props.teamDetails.person.fullName} isFromTeamRoster={true}/>
    </div>
  )
}











export default TeamRoster
