import React from 'react'
import { Link } from 'react-router-dom'
import './AllTeams.css';


const AllTeams = (props) => {
  console.log(props);

  const mappedTeamLink = props.teams.map((team) => {
    return (
      <Link to={`/teams/${team.id}`}>{team.name}</Link>
    )
  })

  return (
    <div>
      {mappedTeamLink}
    </div>
  )
}



export default AllTeams
