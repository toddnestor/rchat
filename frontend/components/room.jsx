import React from 'react';
import MessageList from './message_list';
import NewMessage from './new_message';

class Room extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {addMessage, selected_room } = this.props;

    return (
      <div className="room">
        <h3 className='room-title'>{selected_room ? selected_room.name : 'Choose room'}</h3>
        {selected_room ? <MessageList room_id={selected_room.id} messages={selected_room.messages} /> : ''}
        {selected_room ? <NewMessage room_name={selected_room.name} addMessage={addMessage} /> : ''}
      </div>
    );
  }
}

export default Room;
