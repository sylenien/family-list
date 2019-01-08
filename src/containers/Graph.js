import { connect } from 'react-redux';

import GraphComponent from '../components/Graph';

const mapStateToProps = ({ list, month }) => { //({ list, month });
  const currentList = list.entryes.filter(item => parseInt(item.month) === month);
  return { list: { entryes: currentList }, month: month }
}
export default connect(mapStateToProps)(GraphComponent);