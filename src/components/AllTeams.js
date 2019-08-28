import React from 'react'
import './AllTeams.css';
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
   console.log(this.props)
   console.log(this.state)
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
         onClick={()=> this.handleClick()}
       >Back</button>
          <Roster details={this.state.roster.roster.roster} oneTeam={true} handleClick={this.handleClick}/>
       </div>
   )
   return (
     <div className='TeamContainer'>
       {mappedTeamLink}
       {displaying}
     </div>
   )
 }
}
export default AllTeams
