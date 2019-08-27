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

  makeApiCallTeam = async () => {
    const response = await axios.get('http://statsapi.web.nhl.com/api/v1/teams?expand=team.roster')
    // console.table(response.data.teams);
    this.setState({
      teams: response.data.teams,

    })
  }



  componentDidMount() {
    this.makeApiCallTeam()
  }

  render() {


    return(
      <div className="App">
        <h1>The Show</h1>
        <h3>NHL Stats</h3>
        <div className="homeContainer">
          <Link
            to="/allTeams"
            className='Teams'
            >Teams</Link>
            <Link
              to="/AllPlayers"
              className='Players'
              >Players</Link>
        </div>
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
