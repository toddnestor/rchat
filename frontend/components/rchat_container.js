import { connect } from 'react-redux';
import { loadTeam, changeRoom, signIn } from '../actions';
import RChat from './rchat';

const mapStateToProps = state => ({
  loaded: state.loaded,
  team: state.team,
  current_user: state.current_user,
  rooms: state.rooms,
  selected_room: state.selected_room
});

const mapDispatchToProps = dispatch => ({
  loadTeam: (team, rooms, user) => dispatch(loadTeam(team, rooms, user)),
  changeRoom: (room) => dispatch(changeRoom(room)),
  signIn: (user) => dispatch(signIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RChat);