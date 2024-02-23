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
      <Authentication /> {/* User authentication component */}
      <EventDetails /> {/* Display event details component */}
      <RegistrationForm /> {/* Registration form component */}
      <PaymentGateway /> {/* Payment gateway integration component */}
      <QRCodeDisplay /> {/* QR code generation component */}
      <QRCodeScanner /> {/* QR code scanning component */}
    </div>
  );
}

export default App;
