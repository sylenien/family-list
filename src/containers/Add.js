import { connect } from 'react-redux';

import AddComponent from '../components/Add';

const mapDispatchToProps = dispatch => ({
  addEntry: () => {
    console.log('hello')
  }
})

export default connect(
  () => ({}),
  mapDispatchToProps,
)(AddComponent);