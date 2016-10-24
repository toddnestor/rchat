import React from 'react';
import LogIn from './log_in';
import SignUp from './sign_up';
import Rooms from './rooms';
import CreateRoom from './create_room';
import Room from './room';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { team, current_user, rooms, signIn, selected_room, changeRoom, addMessage, addRoom } = this.props;

    const SignedOutView = () => (
      <div className="container">
        <div className="header clearfix">
          <h3 className="text-muted">rChat{ team ? ' - ' + team.name : ''}</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <LogIn signIn={signIn}  />
          </div>
          <div className="col-md-6">
            <SignUp signIn={signIn} />
          </div>
        </div>
        <footer className="footer">
          <p>&copy; 2016 rChat</p>
        </footer>
      </div>
    );

    const SignedInView = () => (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <h4>Rooms</h4>
            <Rooms rooms={rooms} addRoom={addRoom} changeRoom={changeRoom} selected_room={selected_room} />
          </div>
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <Room selected_room={selected_room} addMessage={addMessage} />
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {current_user ? <SignedInView /> : <SignedOutView />}
      </div>
    );
  }
}

export default Team;
