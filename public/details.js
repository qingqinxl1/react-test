import React from 'react';
import {Route, Link} from 'react-router-dom';

class Details extends React.Component{
  render() {
    let match = this.props.match;
    // console.log(match);
    return <div>
      <ul>
        <li><Link to={`${match.url}/detail1`}>detail1</Link></li>
        <li><Link to={`${match.url}/detail2`}>detail2</Link></li>
        <li><Link to={`${match.url}/detail3`}>detail3</Link></li>
      </ul>
      <Route path={`${match.url}/:detailId`} component={Detail}/>
      <p>Please select the detail page that you want to read!</p>
    </div>;
  }
}

const Detail = ({match}) => {
  return <div>
      <h3>{match.params.detailId}</h3>
    </div>;
}

export default Details;
