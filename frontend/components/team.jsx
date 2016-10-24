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
    let { team, current_user, rooms, signIn, selected_room, changeRoom, addMessage } = this.props;

    const SignedOutView = () => (
      <div className="row">
        <div className="col-md-6">
          <LogIn signIn={signIn}  />
        </div>
        <div className="col-md-6">
          <SignUp signIn={signIn} />
        </div>
      </div>
    );

    const SignedInView = () => (
      <div className="row">
        <div className="col-md-3">
          <Rooms rooms={rooms} changeRoom={changeRoom} />
        </div>
        <div className="col-md-6">
          <Room selected_room={selected_room} addMessage={addMessage} />
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