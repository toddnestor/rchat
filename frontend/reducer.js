import { SIGN_IN, SIGN_OUT, ADD_ROOM, CHANGE_ROOM, ADD_MESSAGE, LOAD_TEAM } from "./actions";

const _defaultState = {
  loaded: false,
  team: null,
  current_user: null,
  rooms: {},
  selected_room: null
}

const reducer = (oldState = _defaultState, action) => {
  let {loaded, team, current_user, rooms, selected_room} = oldState;

  switch(action.type) {
    case SIGN_IN:
      return _.merge({}, oldState, {current_user: action.user});
    case SIGN_OUT:
      return _.merge({}, oldState, {current_user: null});
    case ADD_ROOM:
      rooms = [
        ...rooms,
        action.room
      ];

      selected_room = action.room;

      return {
        loaded,
        team,
        current_user,
        rooms,
        selected_room
      };
    case CHANGE_ROOM:
      selected_room = action.room;

      return {
        loaded,
        team,
        current_user,
        rooms,
        selected_room
      };
    case ADD_MESSAGE:
      rooms = _.merge({}, rooms);
      rooms[action.message.room_id].messages.push(action.message);

      return {
        loaded,
        team,
        current_user,
        rooms,
        selected_room
      };
    case LOAD_TEAM:
      team = action.team;
      rooms = action.rooms;
      current_user = action.current_user;

      return {
        loaded: true,
        team,
        current_user,
        rooms,
        selected_room
      };
    default:
      return oldState;
  }
}

export default reducer;
