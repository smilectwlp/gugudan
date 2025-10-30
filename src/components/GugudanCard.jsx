import React from 'react';

const GugudanCard = ({ dan }) => {
  return (
    <div className="gugudan-card">
      <div className="gugudan-title">{dan}단</div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <div key={i} className="gugudan-item">
          <span className="equation">{dan} × {i}</span>
          <span className="result">{dan * i}</span>
        </div>
      ))}
    </div>
  );
};

export default GugudanCard;
