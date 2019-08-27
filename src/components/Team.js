import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Roster from './Roster'

class Team extends Component {


  state = {
    roster: [],
    clicked: false
  }

  handleClick = () => {
    // console.log(this.props.team.roster.roster)
    this.setState({
      roster: this.props.team.roster.roster,
      clicked: !this.state.clicked
    })
  }




  render() {
    // console.log('from team component', this.state.roster);
    // console.log('clicked', this.state.clicked);

    const roster =  this.state.clicked && <Roster
      roster={this.state.roster}
    />

    // console.log(this.props)

    return (
      <div>
        <p
          onClick = {this.handleClick}
        >
          {this.props.team.name}
        </p>

        {roster}
      </div>
    )
  }
}


export default Team
