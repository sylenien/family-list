import { connect } from 'react-redux';

import addEntry from '../store/actions/addEntry';

import AddComponent from '../components/Add';

const mapDispatchToProps = dispatch => ({
  addEntry: obj => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const entry = { 
      ...obj, 
      date,
      year,
      month
    };
    dispatch(addEntry(entry))
  }
})

const mapStateToProps = ({ list }) => ({ list });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddComponent);