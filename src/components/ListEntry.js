import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Entry = styled.div`
  align-self: center;
`;

const ListEntry = (entry) => (
  <Entry>
    {entry}
  </Entry>
)

export default ListEntry;