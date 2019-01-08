import { connect } from 'react-redux';

import GraphComponent from '../components/Graph';

const mapStateToProps = ({ list }) => ({ list });

export default connect(mapStateToProps)(GraphComponent);