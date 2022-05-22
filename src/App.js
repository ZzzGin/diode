import React from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          hello world! { user.username }
        </div>
      )}
    </Authenticator>
  );
}

export default App;
