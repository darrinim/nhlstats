import React from 'react'
import Team from './Team'
// import TeamsFullRoster from './TeamsFullRoster'

const AllTeams = (props) => {
  // console.log(props);

  const mappedAllTeams = props.teams.map((team) => {
    return (
      <div>
        <Team
          team={team}
        />
      </div>
    )
  })


  return (
    <div>
      {mappedAllTeams}
    </div>
  )
}



export default AllTeams
