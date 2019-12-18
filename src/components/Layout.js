import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{
      borderTop: '3px solid cyan',
      marginTop: '10px',
    }}>
      { children }
    </div>
  );
}

export default Layout;
