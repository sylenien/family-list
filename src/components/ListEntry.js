import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import smoji from '../emoji.js';
=======
import emoji from 'react-easy-emoji';
>>>>>>> 17db41721ac206d8fd033773eaa9c2b45e73383a

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

<<<<<<< HEAD
const FormIcon = styled.div`
  display: inline;
  cursor: pointer;
  margin-right: 0.3em;
`;
=======

function smoji (input) {
	return emoji(input, {
		baseUrl: '//twemoji.maxcdn.com/2/svg',
    ext: '.svg',
    protocol: 'https:',
    size: "",
	})
}
>>>>>>> 17db41721ac206d8fd033773eaa9c2b45e73383a

const ListEntry = (entry) => {
  const {price, name, icon } = entry; // date, id
  return (
  <Entry>
<<<<<<< HEAD
    <FormIcon>{smoji(icon)}</FormIcon>
=======
    {smoji(icon)}
>>>>>>> 17db41721ac206d8fd033773eaa9c2b45e73383a
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