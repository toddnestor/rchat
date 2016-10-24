import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: this.props.messages}
  }

  componentDidMount() {
    let that = this;

    let user = localStorage.getItem('user');

    if( user )
      user = JSON.parse( user );

    if( user && user.auth_token ) {
      App.room = App.cable.subscriptions.create({channel: "RoomChannel", room_id: this.props.room_id, auth_token: user.auth_token}, {
        connected: function () {
        },
        disconnected: function () {
        },
        received: (data) => {
          let message = data.message;
          message.user = data.user;

          console.log('our new message: ', message);

          this.setState({
            messages: [
              ...this.state.messages,
              message
            ]
          });
          $('#new-message').val('');
        },
        message: function (message) {
          return this.perform('message', {
            message: {
              text: message,
              room_id: that.props.room_id
            }
          });
        }
      });
    }
  }

  render() {
    return (
      <ul>
        {
          this.state.messages.map( message => (
            <li key={message.id}>{message.text} - {message.user.username}</li>
          ))
        }
      </ul>
    );
  }
}

export default MessageList;