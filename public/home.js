import React from 'react';
import log from './log_decorator';

class Home extends React.Component {
  @log
  render() {
    return <div > Hello, qingqinxl, welcome to react! This is home page! < /div>;
  }
};

export default Home;
