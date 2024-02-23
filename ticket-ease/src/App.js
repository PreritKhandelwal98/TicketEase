// App.js

import React from 'react';
import RegistrationForm from './components/Registration';
import EventDetails from './components/EventDetails';
import QRCodeDisplay from './components/QRCodeDisplay';
import QRCodeScanner from './components/QRScanner';
import PaymentGateway from './components/PaymentGateway';
import Authentication from './components/Authentication';

function App() {
  return (
    <div className="App">
      {/* <Authentication /> 
      <EventDetails />  */}
      <RegistrationForm /> 
      {/* <PaymentGateway /> 
      <QRCodeDisplay /> 
      <QRCodeScanner />  */}
    </div>
  );
}

export default App;
