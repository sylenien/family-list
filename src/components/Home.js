import React from 'react';
import styled from 'styled-components';

import List from '../containers/List';
import Button from './Button';
import Graph from '../containers/Graph';
import MonthWeel from '../containers/MonthWeel';

const Header = styled.div`
  background-color: #796EFF;
`;

const Home = () => (
  <div>
    <Header>
      <Graph />
      <MonthWeel />
    </Header>
    <List />
    <Button />
  </div>
)

export default Home;