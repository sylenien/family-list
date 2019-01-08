import { connect } from 'react-redux';

import addEntry from '../store/actions/addEntry';

import AddComponent from '../components/Add';

const mapDispatchToProps = dispatch => ({
  addEntry: obj => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `${mm}/${dd}`
    const entry = { 
      ...obj, 
      date,
      year
    };
    dispatch(addEntry(entry))
  }
})

const mapStateToProps = ({ list }) => ({ list });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddComponent);