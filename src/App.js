import React from 'react';
import './App.css';
import Info from './request-demo-info/Info';
import RequestForm from './request-demo-form/RequestForm';

function App() {
  return (
      <div className="demoSignup">
        <div className='demoSignup__info'>
          <Info />
        </div>
        <div className='demoSignup__form'>
          <RequestForm />
        </div>
      </div>
  );
}

export default App;
