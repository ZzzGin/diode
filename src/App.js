import React from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      <div className="App">
        hello world.
      </div>
    </Authenticator>
  );
}

export default App;
