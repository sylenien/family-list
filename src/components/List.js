import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  height: 100%;
`;


const List = ({ entryes }) => (
  <List>
    {entryes.map(item => (
        <Entry {...item} />
      )
    )}
  </List>
) 

List.propTypes = ({
  entryes: PropTypes.arrayOf(PropTypes.object)
})