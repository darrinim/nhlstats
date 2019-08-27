import React from 'react';
import './App.css';
import axios from 'axios'
import AllTeams from './components/AllTeams'
import Team from './components/Team'
import AllPlayers from './components/AllPlayers'
import Homepage from './components/Homepage'
import { Route, Switch, Link } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],

    }
  }

// http://statsapi.web.nhl.com/api/v1/people/8470834

  makeApiCallTeam = async () => {
    const response = await axios.get('http://statsapi.web.nhl.com/api/v1/teams?expand=team.roster')
    // console.table(response.data.teams);
    this.setState({
      teams: response.data.teams,

    })
  }

  // console.log(response.data.stats[0].splits[0].stat);



// <AllPlayers
//   roster={this.state.roster}
// />
// <h1>NHL Stats</h1>
// <Homepage />
// <AllTeams
//   teams={this.state.teams}
// />


// <Homepage />
// <AllTeams
//   teams={this.state.teams}
// />
// <AllPlayers
// roster={this.state.teams}
// />



  componentDidMount() {
    this.makeApiCallTeam()
  }

  render() {


    return(
      <div className="App">
        <h1>NHL Stats</h1>
      <Link to="/allTeams">Teams</Link>
      <Link to="/AllPlayers">Players</Link>
        <Switch>
          <Route
            path='/allTeams'
            render={(props) => <AllTeams {...props} teams={this.state.teams} />}
          />
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
