import { connect } from 'react-redux';

import nextMonth from '../store/actions/nextMonth';
import prevMonth from '../store/actions/prevMonth';

import MonthWeelComponent from '../components/MonthWeel';

const mapStateToProps = ({ month }) => ({ month });

const mapDispatchToProps = dispatch => ({
  nextMonth: () => {
    dispatch(nextMonth());
  },
  prevMonth: () => {
    dispatch(prevMonth());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthWeelComponent);