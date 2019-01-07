import { connect } from 'react-redux';

import ListComponent from '../components/List';

const mapStateToProps = ({ list }) => ({ list });

export default connect(mapStateToProps)(ListComponent);