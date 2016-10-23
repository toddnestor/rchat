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
    let { team, current_user, rooms } = this.props;

    const SignedOutView = () => (
      <div className="row">
        <div className="col-md-6">
          <LogIn />
        </div>
        <div className="col-md-6">
          <SignUp />
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
        Team
        {current_user ? <SignedInView /> : <SignedOutView />}
      </div>
    );
  }
}

export default Team;