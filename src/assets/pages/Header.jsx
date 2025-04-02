import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%)', // Soft pastel gradient
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      marginBottom: '20px',
      gap: '20px', // Spacing between links
    }}>
      <Link 
        to="/" 
        style={{
          textDecoration: 'none',
          color: '#333',
          fontSize: '20px',
          fontWeight: '600',
          padding: '12px 25px',
          background: '#ffffff', // Light background for contrast
          borderRadius: '30px',
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Home
      </Link>

      <Link 
        to="/showdata" 
        style={{
          textDecoration: 'none',
          color: '#333',
          fontSize: '20px',
          fontWeight: '600',
          padding: '12px 25px',
          background: '#ffffff',
          borderRadius: '30px',
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Show Data
      </Link>
    </div>
  );
}

export default Header;
