// components/QRCodeDisplay.js

import React from 'react';

function QRCodeDisplay() {
  // Mock QR code data
  const qrCodeData = 'https://example.com';

  return (
    <div>
      <h2>QR Code Display</h2>
      <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeData}&size=200x200`} alt="QR Code" />
    </div>
  );
}

export default QRCodeDisplay;
