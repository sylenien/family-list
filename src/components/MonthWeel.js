import React from 'react';
import styled from 'styled-components';
import smoji from '../emoji';

const MonthCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  & img {
    width: 1.5em!important;
    height: 1.5em!important;
  }
`;
const MonthText = styled.div`
  color: #fff;
  font-weight: 800;
`;

const monthNames = [
  "January", "February", "March",
  "April", "May", "June", 
  "July", "August", "September",
  "October", "November", "December"
];

const localizeMonth = month => {
  return monthNames[month - 1];
}

const MonthWeel = ({ month, nextMonth, prevMonth }) => (
  <MonthCont>
    <div onClick={prevMonth}> {smoji('👈')} </div>
    <MonthText>{localizeMonth(month)}</MonthText>
    <div onClick={nextMonth}> {smoji('👉')} </div>
  </MonthCont>
);

export default MonthWeel;