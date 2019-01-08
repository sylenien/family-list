import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const GraphEl = styled.div`
  width: 100%;
`;

const Graph = ({ list }) => (
  <GraphEl> 
    <ResponsiveContainer height='100%' aspect={2.0/0.5}>
      <LineChart data={list.entryes}  >
        <Line type="monotone" dataKey="price" stroke="#8884d8"> </Line>
        <XAxis dataKey="date" />
        <YAxis dataKey="price" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </GraphEl>
);

export default Graph;