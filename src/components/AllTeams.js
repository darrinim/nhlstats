import React from 'react'
import Team from './Team'
import { Route, Switch, Link } from 'react-router-dom'


const AllTeams = (props) => {
  console.log(props);

  const mappedAllTeams = props.teams.map((team) => {
    return (
      <div>
        <Team
          team={team}/>
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
