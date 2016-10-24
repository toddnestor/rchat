import React from 'react';

class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.changeRoom = this.changeRoom.bind(this);
    this.defaultRoom();
  }

  defaultRoom() {
    let room = this.props.rooms[Object.keys(this.props.rooms)[0]];

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

  changeRoom(e) {
    e.preventDefault();

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
    let {rooms, changeRoom, selected_room} = this.props;

    return (
      <ul className="nav nav-sidebar">
        {
          Object.keys(rooms).map( id => (
            <li className={selected_room && selected_room.id == rooms[id].id ? 'active' : ''} key={id}>
              <a data-room={id} onClick={this.changeRoom} href="#">{rooms[id].name}</a>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Rooms;
