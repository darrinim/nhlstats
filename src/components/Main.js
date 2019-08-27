import React from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import AllTeams from './components/AllTeams'
import Team from './components/Team'
import TeamsFullRoster from './components/TeamsFullRoster'
import Homepage from './components/Homepage'

function Main() {
  return(
    <main>
      <Switch>
        <Route path='/homepage'
        component={Homepage} />
        <Route path='/AllTeams'
        component={AllTeams} />
        <Route path='/TeamsFullRoster'
        component={TeamsFullRoster} />
        <Route path='/Roster'
        component={Roster} />
      </Switch>
    </main>
  )
}



export default Main
