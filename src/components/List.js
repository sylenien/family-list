import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListEntry from './ListEntry';

const ListEl = styled.div`
  display: flex;
  height: 100%;
`;


const List = ({list}) => (
  <ListEl>
    {list.entryes.map(item => (
        <ListEntry {...item} />
      )
    )}
  </ListEl>
) 

List.propTypes = ({
  entryes: PropTypes.arrayOf(PropTypes.object)
})

export default List;