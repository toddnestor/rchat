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
    let { team, current_user, rooms, signIn } = this.props;
//current_user={current_user} team={team} rooms={rooms} selected_room={selected_room} changeRoom={changeRoom}
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
          <Rooms />
        </div>
        <div className="col-md-6">
          <Room />
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