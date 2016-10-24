import React from 'react';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);

    this.addMessage = this.addMessage.bind(this);
  }

  preventDefault(e) {
    e.preventDefault();
  }

  addMessage(e) {
    if( e.keyCode == 13 ) {
      App.room.message($('#new-message').val());
    }
  }

  render() {

    return (
      <div className="new-message-section">
        <form onSubmit={this.preventDefault}>
          <textarea onKeyUp={this.addMessage} className="form-control" id="new-message" placeholder={'Message #' + this.props.room_name}></textarea>
        </form>
      </div>
    );
  }
}

export default NewMessage;
