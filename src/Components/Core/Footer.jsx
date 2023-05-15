import React, { useState } from 'react';

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear())

  return (
    <footer className="footer items-center p-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex items-center gap-4">
          <p>Face-IT © {date} - All right reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
