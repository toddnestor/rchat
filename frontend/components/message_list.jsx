import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: this.props.messages}
  }

  componentDidMount() {
    $('.message-list').scrollTop($('.message-list')[0].scrollHeight);
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

          this.setState({
            messages: [
              ...this.state.messages,
              message
            ]
          });
          $('#new-message').val('');
          $('.message-list').scrollTop($('.message-list')[0].scrollHeight);
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
      <ul className="media-list message-list">
        {
          this.state.messages.map( message => (
            <li key={message.id} className="media">
              <div className="media-left">
                <a href="javascript:void(0);">
                  <img className="media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTdmNTgzN2ZhYyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1N2Y1ODM3ZmFjIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNC41IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{message.user.username}</h4>
                {message.text}
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default MessageList;
