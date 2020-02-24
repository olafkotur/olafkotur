import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { navigate } from '@reach/router';

interface IProps {
}

interface IState {
}


export default class Navigation extends React.Component<IProps, IState> {
  render(): JSX.Element {
    return (
      <div className='navigationContainer'>

        <AppBar position='static' >
          <Toolbar>
            <img onClick={() => navigate('/')} className='navigationLogo' alt='Dev logo' src='https://camo.githubusercontent.com/8bbe5211f98dc9849521a6f1fcc332df0d8c2bbf/68747470733a2f2f74686570726163746963616c6465762e73332e616d617a6f6e6177732e636f6d2f692f64336f356c397969716676317a3234636e3179702e706e67' />
            <Button color='inherit' className='navigationOption' onClick={() => navigate('/gists')}>Gists</Button>
            <Button color='inherit' className='navigationOption' onClick={() => navigate('/photos')}>Photos</Button>
            <Button color='inherit' className='navigationOption' onClick={() => navigate('/blog')}>Blog</Button>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}