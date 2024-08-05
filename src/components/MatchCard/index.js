import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    const matchStatusClassName = matchStatus.toLowerCase()

    return (
      <li className={`match-card ${matchStatusClassName}`}>
        <img
          src={competingTeamLogo}
          className="match-card-team-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="match-card-team-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className={`match-status ${matchStatusClassName}`}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
