import React from 'react';
import Team from './team';
import CreateTeam from './create_team';
import { Route } from 'react-router';

class RChat extends React.Component {
  constructor(props) {
    super(props);
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
    let { loaded, team, current_user, rooms, selected_room, changeRoom, signIn, addMessage } = this.props;

    return (
      <div className="container">
        <div className="header clearfix">
          <h3 className="text-muted">rChat{ team ? ' - ' + team.name : ''}</h3>
        </div>
        {loaded ? (team ? <Team addMessage={addMessage} signIn={signIn} current_user={current_user} team={team} rooms={rooms} selected_room={selected_room} changeRoom={changeRoom} /> : <CreateTeam />) : 'Loading...'}
        <footer className="footer">
          <p>&copy; 2016 rChat</p>
        </footer>
      </div>
    );
  }
}

export default RChat;