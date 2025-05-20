import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(13, 27, 42, 0.8)',
      backdropFilter: 'blur(5px)',
      zIndex: 9999
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid rgba(255, 165, 0, 0.3)',
        borderRadius: '50%',
        borderTopColor: '#ffa500',
        animation: 'spin 1s linear infinite'
      }} />
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner; 