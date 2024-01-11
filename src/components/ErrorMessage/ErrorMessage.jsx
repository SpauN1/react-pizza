import React from 'react';

import img from '../../assets/error.gif';

export const ErrorMessage = () => {
  return (
    <div style={{ padding: '100px' }}>
      <h2
        style={{ textAlign: 'center', marginBottom: '15px', fontSize: '20px' }}
        className="not-found"
      >
        Ничего не найдено:
      </h2>
      <img
        style={{
          display: 'block',
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          margin: '0 auto',
        }}
        src={img}
        alt="Error"
      />
    </div>
  );
};
