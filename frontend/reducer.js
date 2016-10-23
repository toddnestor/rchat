import { SIGN_IN, SIGN_OUT, ADD_ROOM, CHANGE_ROOM, ADD_MESSAGE, LOAD_TEAM } from "./actions";

const _defaultState = {
  loaded: false,
  team: null,
  current_user: null,
  rooms: {}
}

const reducer = (oldState = _defaultState, action) => {
  let {loaded, team, current_user, rooms} = oldState;

  switch(action.type) {
    case SIGN_IN:
      return _.merge({}, oldState, {current_user: action.user});
    case SIGN_OUT:
      return _.merge({}, oldState, {current_user: null});
    case ADD_ROOM:
      rooms = _.merge({}, rooms);

      rooms[action.room.id] = {
        name: action.room.name,
        messages: []
      };

      return {
        loaded,
        team,
        current_user,
        rooms
      };
    case ADD_MESSAGE:
      rooms = _.merge({}, rooms);
      rooms[action.message.room_id].messages.push(action.message);

      return {
        loaded,
        team,
        current_user,
        rooms
      };
    case LOAD_TEAM:
      team = action.team;
      rooms = action.rooms;
      current_user = action.current_user;

      return {
        loaded: true,
        team,
        current_user,
        rooms
      };
    default:
      return oldState;
  }
}

export default reducer;