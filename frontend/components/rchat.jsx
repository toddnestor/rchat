import React from 'react';
import Team from './team';
import CreateTeam from './create_team'

class RChat extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $.ajax({
      url: '/team.json',
      method: 'GET',
      dataType: 'json',
      success: (response) => {
        this.props.loadTeam(response.team, response.rooms, response.user);
      },
      error: () => {
        this.props.loadTeam();
      }
    });
  }

  render() {
    let { loaded, team, current_user, rooms } = this.props;

    return (
      <div>
        {loaded ? (team ? <Team current_user={current_user} team={team} rooms={rooms} /> : <CreateTeam />) : 'Loading...'}
      </div>
    );
  }
}

export default RChat;