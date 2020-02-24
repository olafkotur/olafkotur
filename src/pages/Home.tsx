import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
}

interface IState {
}

export default class Home extends React.Component<IProps, IState> { 

  render() {
    return (
      <div className='homeContainer'>
        <h1>Olaf Kotur</h1>
      </div>
    );
  }
}
 