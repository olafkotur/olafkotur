import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
}

interface IState {
}

export default class Gist extends React.Component<IProps, IState> { 

  render() {
    return (
      <div>
        <h1>Gist</h1>
      </div>
    );
  }
}
 