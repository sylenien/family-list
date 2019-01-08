import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import emoji from 'react-easy-emoji';

const ButtonEl = styled.div`
  border-radius: 90px;
  background-color: #6B65D5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  &:hover {
    background-color: #605abf;
    transition: 0.3s all ease-in-out;
  }
`;
const ButtonContent = styled.div`
  text-align: center;
  color: white;
  & img {
    width: 2em!important;
    height: 2em!important;
    margin: 0!important;

  }
`;

function smoji (input) {
	return emoji(input, {
		baseUrl: '//twemoji.maxcdn.com/2/svg',
    ext: '.svg',
    protocol: 'https:',
    size: "",
	})
}

const Button = () => (
  <Link to="/add">
    <ButtonEl>
      <ButtonContent>
        {smoji('➕')}
      </ButtonContent>
    </ButtonEl>
  </Link>
)

export default Button;