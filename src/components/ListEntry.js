import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Entry = styled.div`
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const EntryChild = styled.div`
  flex: 1;
`;
const EntryChildRight = styled(EntryChild)`
  text-align: right;
`;

const ListEntry = (entry) => {
  const {price, date, name, icon, id} = entry;
  return (
  <Entry>
    <img src={icon} alt='ico'/>
    <EntryChild>{name}</EntryChild>
    <EntryChildRight>{price}</EntryChildRight>
    {/* <EntryChild>{date}</EntryChild> */}
  </Entry>)
}

export default ListEntry;