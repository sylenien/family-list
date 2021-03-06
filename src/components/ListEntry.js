import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import smoji from '../emoji.js';

const Entry = styled.div`
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding-top: 1vh;
`;

const EntryChild = styled.div`
  flex: 1;
`;
const EntryChildRight = styled(EntryChild)`
  text-align: right;
`;

const FormIcon = styled.div`
  display: inline;
  cursor: pointer;
  margin-right: 0.3em;
`;

const ListEntry = (entry) => {
  const {price, name, icon } = entry; // date, id
  return (
  <Entry>
    <FormIcon>{smoji(icon)}</FormIcon>
    <EntryChild>{name}</EntryChild>
    <EntryChildRight>{price}</EntryChildRight>
    {/* <EntryChild>{date}</EntryChild> */}
  </Entry>)
}

ListEntry.proptypes = ({
  entry: PropTypes.shape({
    price: PropTypes.number,
    date: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
});

export default ListEntry;