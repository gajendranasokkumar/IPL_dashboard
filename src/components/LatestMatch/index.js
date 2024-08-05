import React, {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchData} = this.props
    console.log('LatestMatch Props:', latestMatchData)

    if (!latestMatchData) {
      return <div>Loading...</div>
    }

    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatchData

    return (
      <div className="latest-match-container">
        <h1 className="latest-match-heading">Latest Matches</h1>
        <div className="latest-match-card">
          <div className="latest-match-details-logo-container">
            <div className="latest-match-details-1">
              <p className="latest-match-team-name">{competingTeam}</p>
              <p className="latest-match-date">{date}</p>
              <p className="latest-match-venue">{venue}</p>
              <p className="latest-match-result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="latest-match-team-logo"
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-2">
            <div className="match-info-item">
              <p className="latest-match-details-label">First Innings</p>
              <p className="latest-match-details-value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Second Innings</p>
              <p className="latest-match-details-value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Man Of The Match</p>
              <p className="latest-match-details-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Umpires</p>
              <p className="latest-match-details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
