import React from 'react';

class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.changeRoom = this.changeRoom.bind(this);
  }

  changeRoom(e) {
    let room = this.props.rooms[$(e.currentTarget).data('room')];

    $.ajax({
      url: ajax_url + '/messages.json?room_id=' + room.id,
      method: 'GET',
      dataType: 'json',
      success: (messages) => {
        room.messages = messages;
        this.props.changeRoom(room);
      }
    });
  }

  render() {
    let {rooms, changeRoom} = this.props;
    return (
      <div>
        Rooms
        <ul>
          {
            Object.keys(rooms).map( id => (
              <li key={id} data-room={id} onClick={this.changeRoom}>{rooms[id].name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Rooms;