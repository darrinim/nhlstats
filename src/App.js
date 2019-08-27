import React from 'react';
import './App.css';
import axios from 'axios'
import AllTeams from './components/AllTeams'
import Team from './components/Team'
import AllPlayers from './components/AllPlayers'
import { Route, Switch, Link } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
    }
  }

  makeApiCallTeam = async () => {
    const response = await axios.get('http://statsapi.web.nhl.com/api/v1/teams?expand=team.roster')
    // console.table(response.data.teams);
    this.setState({
      teams: response.data.teams,
      cTeams: true,
      cPlayers: true
    })
  }


  componentDidMount() {
    this.makeApiCallTeam()
  }



  render() {

    let RTeam = <Link to="/allTeams"  className='Teams' onClick={this.teamsClick}>Teams</Link>

    let RPlayers = <Link to="/AllPlayers" className='Players' onClick={this.playersClick}>Players</Link>

    return(
      <div className="App">
        <h1>The Show</h1>
        <h3>NHL Stats</h3>
        <div className="homeContainer">
          {RTeam}
          {RPlayers}
        </div>
              <Switch>
                <Route
                  path='/allTeams'
                    render={(props) => <AllTeams {...props} teams={this.state.teams} />}
                />
                <Route
                  path={`/teams/:id`}
                  render={(props) => {
                    const id = props.match.params.id;
                    const team = this.state.teams.find(team => team.id === parseInt(id))
                    return <Team team={team}/>
                  }} />
                <Route
                  path='/AllPlayers'
                  render={(props) => <AllPlayers {...props} roster={this.state.teams}/>}
                />

              </Switch>


      </div>
    )
  }
}



export default App;
