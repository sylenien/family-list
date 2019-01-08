import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
  height: 32px;
  width: 32px;
  & img {
    width: 2em!important;
    height: 2em!important;
    margin: 0!important;

  }
`;

const Button = () => (
  <Link to="/add">
    <ButtonEl>
      <ButtonContent>
      <img alt="+" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MS44NiA0OTEuODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MS44NiA0OTEuODY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NjUuMTY3LDIxMS42MTRIMjgwLjI0NVYyNi42OTFjMC04LjQyNC0xMS40MzktMjYuNjktMzQuMzE2LTI2LjY5cy0zNC4zMTYsMTguMjY3LTM0LjMxNiwyNi42OXYxODQuOTI0SDI2LjY5ICAgIEMxOC4yNjcsMjExLjYxNCwwLDIyMy4wNTMsMCwyNDUuOTI5czE4LjI2NywzNC4zMTYsMjYuNjksMzQuMzE2aDE4NC45MjR2MTg0LjkyNGMwLDguNDIyLDExLjQzOCwyNi42OSwzNC4zMTYsMjYuNjkgICAgczM0LjMxNi0xOC4yNjgsMzQuMzE2LTI2LjY5VjI4MC4yNDVINDY1LjE3YzguNDIyLDAsMjYuNjktMTEuNDM4LDI2LjY5LTM0LjMxNlM0NzMuNTksMjExLjYxNCw0NjUuMTY3LDIxMS42MTR6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
      </ButtonContent>
    </ButtonEl>
  </Link>
)

export default Button;