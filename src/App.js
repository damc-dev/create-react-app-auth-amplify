import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut, AmplifyContainer, AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const App = () => {
	const [authState, setAuthState] = useState();
	const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
			setAuthState(nextAuthState);
			setUser(authData);
		});
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello, {user.username}</div>
				<AmplifySignOut />
      </header>
    </div>
  ) : (
    <AmplifyContainer>
    <AmplifyAuthenticator />
  </AmplifyContainer>
  )
}

export default withAuthenticator(App);
