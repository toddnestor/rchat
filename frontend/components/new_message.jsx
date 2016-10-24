import React from 'react';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(e) {
    e.preventDefault();

    App.room.message($('#new-message').val());
  }

  render() {

    return (
      <div>
        New Message
        <form onSubmit={this.addMessage}>
          <textarea className="form-control" id="new-message"></textarea>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewMessage;