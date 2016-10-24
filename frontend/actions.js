export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const ADD_ROOM = 'ADD_ROOM';
export const CHANGE_ROOM = 'CHANGE_ROOM';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LOAD_TEAM = 'LOAD_TEAM';

export const signIn = (user) => ({
  type: SIGN_IN,
  user
});

export const signOut = () => ({
  type: SIGN_IN
});

export const loadTeam = (team = null, rooms = [], current_user = null) => ({
  type: LOAD_TEAM,
  team,
  rooms,
  current_user
});

export const changeRoom = (room = null) => ({
  type: CHANGE_ROOM,
  room
});