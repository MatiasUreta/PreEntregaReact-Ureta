import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <p style={{ fontSize: '14px', color: '#777' }}>
        © {new Date().getFullYear()} Proyecto final de React de Matias Ureta.
      </p>
    </footer>
  );
};

export default Footer;
