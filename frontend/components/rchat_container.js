import { connect } from 'react-redux';
import { loadTeam } from '../actions';
import RChat from './rchat';

const mapStateToProps = state => ({
  loaded: state.loaded,
  team: state.team,
  current_user: state.current_user,
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
  loadTeam: (team, rooms, user) => dispatch(loadTeam(team, rooms, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RChat);