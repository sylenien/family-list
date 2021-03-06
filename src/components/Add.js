import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import smoji from '../emoji.js';

const AddForm = styled.div`
  background-color: #796EFF;
  padding: 20px;
`;
const InputItem = styled.div`
  padding: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 40%;
  padding: 5px;
  margin: 0 5px;
  border: 0;
  border-bottom: 2px solid #1976D2;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  background: transparent;
  color: #BBDEFB;
  &:focus {
    outline: 0;
	  color: white;
    &::placeholder {
      color: white;
    }
  }
  &::placeholder {
    color: #BBDEFB;
  }
`;
const Icons = styled.div`
  height: 600px;
  padding: 20px;
  text-align: center;
  & div {
    cursor: pointer;
    display: inline-block;
    margin: 20px;
    & img {
      width: 1.5em!important;
      height: 1.5em!important;
    }
  }
`;
const FormIcon = styled.div`
  display: inline;
  cursor: pointer;
  & img {
    width: 1.5em!important;
    height: 1.5em!important;
  }
`;
const Return = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 50px;
  background-color: #796EFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  cursor: pointer;
  color: white;
`;


const emojis = ['🍽', '🍕', '🍎', '💅', 
  '🎮', '📱', '💳', '🏠', '🐱', '🏄‍♂️', 
  '🧴', '🚕', '🚇', '👕', '💊', '🖥', 
  '🎁', '🛒']

class Add extends Component {
  constructor(props) {
    super(props);
    const lastId = this.props.list.entryes.sort((x, y) => y.id - x.id)[0].id
    this.state = {
      price: "",
      date: "",
      name: "",
      icon: "🔥",
      id: lastId + 1,
    }
    this.pickEmoji = this.pickEmoji.bind(this);
    this.changeData = this.changeData.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
  }
  pickEmoji(emoji) {
    this.setState({icon: emoji})
  }
  changeData({ target }, key) {
    const state = this.state;
    state[key] = target.value;
    this.setState(state);
  }
  saveEntry() {
    const entry = this.state;
    this.props.addEntry(entry);
    this.props.history.push('/')
  }
  render() {
    const { icon } = this.state;
    return (
      <div>
        <AddForm> 
          <InputItem>
            <FormIcon>{smoji(icon)}</FormIcon>
            <Input type="text" onChange={(e) => this.changeData(e, 'price')} placeholder="Price" />
            <Input type="text" onChange={(e) => this.changeData(e, 'name')} placeholder="Where" />
            <FormIcon onClick={this.saveEntry}>{smoji('💾')}</FormIcon>
          </InputItem>
        </AddForm>
        <Icons>
          {emojis.map((item, i) => (
            <div key={i} onClick={() => this.pickEmoji(item)}>{smoji(item)}</div>
          ))}
          <br /> 
          <Input type="text" onChange={(e) => this.changeData(e, 'icon')} placeholder="Not enough?" />
        </Icons>
        <Link to="/">
          <Return> 
            {smoji('👈')} Go Back
          </Return>
        </Link>
      </div>
    )
  }
}

export default Add;