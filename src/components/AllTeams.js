import React from 'react'
import Roster from './Roster'


class AllTeams extends React.Component {
 state = {
   roster: [],
   clicked: false
 }

 handleClick = (team) => {
   this.setState({
     clicked: !this.state.clicked,
     roster: team
   })
 }

 render() {
   const mappedTeamLink = this.state.clicked === false && this.props.teams.map((team) => {
     return (
       <div>
         <div
           className='AllTeamSelect'
           onClick={() => this.handleClick(team)}
         >
           {team.name}
         </div>
       </div>
     )
   })
   const displaying = this.state.clicked && (
       <div>
       <button
          className="Button"
         onClick={()=> this.handleClick()}>Back</button>
          <Roster details={this.state.roster.roster.roster} oneTeam={true} handleClick={this.handleClick}/>
       </div>
   )
   return (
     <div className="teamSelection">
       {mappedTeamLink}
       {displaying}
     </div>
   )
 }
}
export default AllTeams
