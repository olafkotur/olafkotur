import React from 'react';
import { Router } from '@reach/router';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Gist from './pages/Gist';

interface IState {
  
}

export default class App extends React.Component<{}, IState> {
  // constructor(props: any) {
  //   super(props);
  // }

  render(): JSX.Element {
    return (
      <div>
        <Navigation />
        <Router>
          <Home path='/' />
          <Gist path='/gists' />
        </Router>
      </div>
    );
  }
}