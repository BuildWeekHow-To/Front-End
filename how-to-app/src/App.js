import React from 'react';
import LogInForms from './Components/Login';
import './App.css';
import SignUp from "./Components/SignUp"

function App() {
  return (
    <div className="App">

      {<LogInForms />}
      {<SignUp />}

    </div>
  );
}

export default App;
