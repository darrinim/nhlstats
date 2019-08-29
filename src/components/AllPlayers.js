import React from 'react';
import Roster from './Roster';



const AllPlayers = (props) => {

  let mappedRosters = props.roster.map((roster, i) => {
    return (
      <div>
        <Roster details={props.roster[i].roster.roster} />
      </div>
    )
  })
  return (
    <div>
      {mappedRosters}
    </div>
  )
}

export default AllPlayers;
