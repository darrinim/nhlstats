import React, { Component } from 'react'
import Roster from './Roster'

class Team extends Component {
  state = {
    roster: [],
    clicked: false
  }

  handleClick = () => {
    this.setState({
      roster: this.props.team.roster.roster,
      clicked: !this.state.clicked
    })
  }

  render() {

    const roster = this.state.clicked && <Roster
      roster={this.state.roster}
    />

    return (
      <div>
        {this.props.team && (
          <>
            <p
              onClick = {this.handleClick}
              className="TeamClick"
            >
              {this.props.team.name}
            </p>

            {roster}
          </>
        )}
      </div>
    )
  }
}


export default Team
