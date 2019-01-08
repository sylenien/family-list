import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, LabelList, ResponsiveContainer, XAxis } from 'recharts'; //Tooltip, YAxis

const GraphEl = styled.div`
  width: 100%;
`;
const empty = [
  {
    price: "0",
    date: "0",
    month: "1",
    year: "2019",
    name: "HDHD",
    icon: "🥂",
    id: 1,
  },
  {
    price: "0",
    date: "0",
    month: "1",
    year: "2019",
    name: "HDzxcghvzxD",
    icon: "🍽",
    id: 2,
  }
];
const Graph = ({ list }) => {
  const data = list.entryes.length > 0 ? list.entryes : empty;
  return (
    <GraphEl> 
      <ResponsiveContainer height='100%' aspect={2.0/0.5}>
        <LineChart data={data}  margin={{right: 20, top: 15, left: 20}}>
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#ffff"
          >
            <LabelList dataKey="price" position="top" fill="#fff"/>
          </Line>
          <XAxis dataKey="date" stroke="#fff"/>
          {/* <Tooltip /> */}
        </LineChart>
      </ResponsiveContainer>
    </GraphEl>
  );
}

export default Graph;