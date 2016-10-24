import React from 'react';
import Errors from './errors';

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.state = {errors: []};
  }

  addErrors(errors) {
    this.setState({errors});
  }

  signIn(e) {
    e.preventDefault();

    let data = {
      user: {
        email: $('#email1').val(),
        password: $('#password1').val()
      }
    }

    $.ajax({
      url: ajax_url + '/users/sign_in.json',
      method: 'POST',
      dataType: 'json',
      data: data,
      success: (response) => {
        this.props.signIn(response)
      },
      error: (xhr) => {
        let errors = xhr.responseJSON.error ? [xhr.responseJSON.error] : xhr.responseJSON.errors;

        this.addErrors(errors);
      }
    })
  }

  render() {

    return (
      <div className="log-in">
        <h3>Log In</h3>
        {this.state.errors.length > 0 ? <Errors errors={this.state.errors} /> : ''}
        <form onSubmit={this.signIn}>
          <div className="alert alert-info" role="alert">
            <strong>Note: </strong> If you just created a team and/or account, you'll need to check your e-mail and confirm your account before you can log in!
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="form-control" id="email1" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default LogIn;