import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import emoji from 'react-easy-emoji';

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


function smoji (input) {
	return emoji(input, {
		baseUrl: '//twemoji.maxcdn.com/2/svg',
    ext: '.svg',
    protocol: 'https:',
    size: "",
	})
}

const ListEntry = (entry) => {
  const {price, name, icon } = entry; // date, id
  return (
  <Entry>
    {smoji(icon)}
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