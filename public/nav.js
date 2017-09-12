import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
  render() {
    return <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to="/list">列表页</Link></li>
      <li><Link to="/details">详情页</Link></li>
    </ul>
  }
}

export default Nav;
