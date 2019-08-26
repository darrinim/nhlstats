import React from 'react';
import './App.css';
import axios from 'axios'
import AllTeams from './components/AllTeams'
import Team from './components/Team'
import TeamsFullRoster from './components/TeamsFullRoster'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
      roster: [],
    }
  }


  makeApiCallTeam = async () => {
    const response = await axios.get('http://statsapi.web.nhl.com/api/v1/teams?expand=team.roster')
    // console.table(response.data.teams);
    this.setState({
      teams: response.data.teams,
      roster: response.data.teams
    })
  }
  makeApiCall = async () => {
  const response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season=20182019')
  // console.log(response.data.stats[0].splits[0].stat);
}





  componentDidMount() {
    this.makeApiCallTeam()
    this.makeApiCall()
  }

  render() {

    return(
      <div className="App">
        <h1>NHL Stats</h1>
        <AllTeams
          teams={this.state.teams}
        />
        <TeamsFullRoster
          roster={this.state.teams}
        />
      </div>
    )
  }
}



export default App;
