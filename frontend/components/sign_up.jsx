import React from 'react';
import Errors from './errors';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.state = {errors: []};
  }

  addErrors(errors) {
    this.setState({errors});
  }

  signUp(e) {
    e.preventDefault();

    let data = {
      user: {
        fname: $('#fname').val(),
        lname: $('#lname').val(),
        username: $('#username').val(),
        email: $('#email2').val(),
        password: $('#password2').val(),
        password_confirmation: $('#password_confirmation').val()
      }
    }

    $.ajax({
      url: '/users.json',
      method: 'POST',
      dataType: 'json',
      data: data,
      success: (response) => {
        $('.sign-up input').val('');
        $('.sign-up h3').after('<div class="alert alert-success" role="alert"><strong>Success!</strong> Go check your e-mail to confirm your account!</div>');
      },
      error: (xhr) => {
        let errors = xhr.responseJSON.error ? [xhr.responseJSON.error] : null;

        if( !errors ) {
          errors = [];
          Object.keys(xhr.responseJSON.errors).forEach( key => {
            errors.push(key.charAt(0).toUpperCase() + key.slice(1) + ' ' + xhr.responseJSON.errors[key]);
          });
        }

        this.addErrors(errors);
      }
    })
  }

  render() {

    return (
      <div className="sign-up">
        <h3>Sign Up</h3>
        {this.state.errors.length > 0 ? <Errors errors={this.state.errors} /> : ''}
        <form onSubmit={this.signUp}>
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
            <input type="email" className="form-control" id="email2" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password2" placeholder="Password" />
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

export default SignUp;