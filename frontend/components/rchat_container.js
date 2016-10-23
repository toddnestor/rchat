import { connect } from 'react-redux';
// import { addApple, addOrange, clearFruit } from '../actions';
import RChat from './rchat';

const mapStateToProps = state => ({
  // fruits: state.fruits
});

const mapDispatchToProps = dispatch => ({
  // addApple: () => dispatch(addApple()),
  // addOrange: () => dispatch(addOrange()),
  // clearFruit: () => dispatch(clearFruit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RChat);