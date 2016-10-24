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
      url: ajax_url + '/team.json',
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
    let { loaded, team, current_user, rooms, selected_room, changeRoom, signIn, addMessage, addRoom } = this.props;

    return (
      <div>
        {loaded ? (team ? <Team addRoom={addRoom} addMessage={addMessage} signIn={signIn} current_user={current_user} team={team} rooms={rooms} selected_room={selected_room} changeRoom={changeRoom} /> : <CreateTeam />) : 'Loading...'}
      </div>
    );
  }
}

export default RChat;
