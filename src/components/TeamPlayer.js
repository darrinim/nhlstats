import React from 'react'
import axios from 'axios'

class TeamPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      stats: {},
      playerInfo:{}
    }
  }

  getPlayerAbout = async () => {
    const response = await axios.get(`http://statsapi.web.nhl.com/${this.props.player.person.link}`)


    const statsCall = await axios.get(`http://statsapi.web.nhl.com/${this.props.player.person.link}/stats?stats=statsSingleSeason&season=20172018`)
    // send up current player
    this.props.setCurrentPlayer({
      player: this.props.player,
      stats: statsCall.data.stats[0].splits[0].stat,
      playerInfo: response.data.people[0]
    });
    // this.setState({
    //   playerInfo: response.data.people[0],
    //   stats: statsCall.data.stats[0].splits[0].stat
    // })
  }


  render() {
    console.log(this.props)
    // console.log(this.state.stats);
    const{playerInfo, player, stats} = this.props
    return(
      <div className="SinglePlayerContainer">
      <div
        className="SinglePlayer"
        onClick={this.getPlayerAbout}
      >{player.person.fullName} <br/> {player.position.name}</div>

      {playerInfo ?
        <div className="PlayerBio">
          <p className="BioStats">Player Bio</p>
          <p>Birth Date: {playerInfo.birthDate}</p>
          <p>Age: {playerInfo.currentAge}</p>
          <p>Height: {playerInfo.height}</p>
          <p>Weight: {playerInfo.weight}</p>
          <p>Nationality: {playerInfo.nationality}</p>
          <p>Born In: {playerInfo.birthCity}</p>
          <p>Jersey Number: {playerInfo.primaryNumber}</p>
          <p>Shoots/Catches: {playerInfo.shootsCatches}</p>
        </div>
        : null
      }
      {stats ?
        <div className="PlayerStats">
          <p className="BioStats">Player Stats</p>
          <p>Goals: {stats.goals}</p>
          <p>Assists: {stats.assists}</p>
          <p>Plus/Minus: {stats.plusMinus}</p>
          <p>Penalty Minutes: {stats.penaltyMinutes}</p>
          <p>Hits: {stats.hits}</p>
          <p>Blocked Shots: {stats.blocked}</p>
          <p>Power Play Goals: {stats.powerPlayGoals}</p>
          <p>Power Play Points: {stats.powerPlayPoints}</p>
        </div>
        : null
      }
      </div>
    )
  }
}




export default TeamPlayer
