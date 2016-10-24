import React from 'react';

class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.changeRoom = this.changeRoom.bind(this);
    this.addNewRoom = this.addNewRoom.bind(this);
    this.defaultRoom();
  }

  defaultRoom() {
    if(!this.props.selected_room) {
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

  addNewRoom(e) {
    if(e.keyCode === 13 ) {
      let data = {
        room: {
          name: $('#new-room-name').val()
        }
      };

      $.ajax({
        url: ajax_url + '/rooms.json',
        method: 'POST',
        dataType: 'json',
        data: data,
        success: (response) => {
          response.messages = [];
          this.props.addRoom(response);
          $('#new-room-name').val('');
        }
      })
    }
  }

  toggleRoom(e) {
    e.preventDefault();
    $('.add-room').toggle();
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
        <li><a href="#" onClick={this.toggleRoom}>+ Add Room</a></li>
        <li className="add-room"><input type="text" onKeyUp={this.addNewRoom} className="form-control" id="new-room-name" placeholder="Room Name" /> <a onClick={this.toggleRoom} href="#">cancel</a></li>
      </ul>
    );
  }
}

export default Rooms;
