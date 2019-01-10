import { connect } from 'react-redux';

import ListComponent from '../components/List';

const mapStateToProps = ({ list, month }) => { //({ list, month });
  const currentList = list.entryes.filter(item => parseInt(item.month) === month).sort((a,b) => b.id - a.id);
  return { list: { entryes: currentList }, month: month }
}
export default connect(mapStateToProps)(ListComponent);