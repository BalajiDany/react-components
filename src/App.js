import React from 'react';
import AuthenticationForm from './components/AuthenticationForm/AuthenticationForm'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <AuthenticationForm title='App Title'/>
    </div>
  );
}

export default App;
