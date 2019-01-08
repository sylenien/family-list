import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListEntry from './ListEntry';
import ListEmpty from './ListEmpty';

const ListEl = styled.div`
  height: 100%;
`;


const List = ({list}) => (
  <div>
    {list.entryes.length === 0 ? 
      (<ListEmpty />) 
      :
      (
      <ListEl>
        {list.entryes.map(item => (
            <ListEntry key={item.id} {...item} />
          )
        )}
      </ListEl>
      )
    }
  </div>
)
    

    

List.propTypes = ({
  entryes: PropTypes.arrayOf(PropTypes.object)
})

export default List;