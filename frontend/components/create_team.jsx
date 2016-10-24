import React from 'react';

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);

    this.createTeam = this.createTeam.bind(this);
  }

  createTeam(e) {
    e.preventDefault();
    let data = {
      team: {
        name: $('#teamName').val(),
        subdomain: $('#subdomain').val()
      },
      user: {
        fname: $('#fname').val(),
        lname: $('#lname').val(),
        username: $('#username').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        password_confirmation: $('#password_confirmation').val()
      }
    }

    $.ajax({
      url: ajax_url + '/users.json',
      method: 'POST',
      data: data,
      dataType: 'json',
      success: (response) => {
        location.href = 'http://' + data.team.subdomain + '.' + location.hostname + (location.port ? ':' + location.port : '' )
      }
    })
  }

  render() {

    return (
      <div className="create-team">
        <h1>Create Team</h1>
        <form onSubmit={this.createTeam}>
          <div className="form-group">
            <label htmlFor="teamName">Team Name</label>
            <input type="text" className="form-control" id="teamName" placeholder="Team Name" />
          </div>
          <div className="form-group">
            <label htmlFor="subdomain">Subdomain</label>
            <input type="text" className="form-control" id="subdomain" placeholder="Subdomain" />
          </div>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" className="form-control" id="fname" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className="form-control" id="lname" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="form-control" id="email" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input type="password" className="form-control" id="password_confirmation" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateTeam;