import React, { useState } from 'react';
import GugudanCard from './components/GugudanCard';

function App() {
  const [viewMode, setViewMode] = useState('all');
  const [selectedDan, setSelectedDan] = useState(2);

  const handleShowAll = () => {
    setViewMode('all');
  };

  const handleShowSingle = () => {
    const dan = prompt('몇 단을 보시겠습니까? (2-9)', '2');
    const danNumber = parseInt(dan);

    if (danNumber >= 2 && danNumber <= 9) {
      setSelectedDan(danNumber);
      setViewMode('single');
    } else {
      alert('2부터 9 사이의 숫자를 입력해주세요!');
    }
  };

  return (
    <div className="container">
      <h1>🔢 구구단 곱셈표 🔢</h1>
      
      <div className="controls">
        <button 
          className={`btn ${viewMode === 'all' ? 'active' : ''}`}
          onClick={handleShowAll}
        >
          전체 보기
        </button>
        <button 
          className={`btn ${viewMode === 'single' ? 'active' : ''}`}
          onClick={handleShowSingle}
        >
          단 선택
        </button>
      </div>

      <div className="gugudan-grid">
        {viewMode === 'all' ? (
          [2, 3, 4, 5, 6, 7, 8, 9].map((dan) => (
            <GugudanCard key={dan} dan={dan} />
          ))
        ) : (
          <GugudanCard dan={selectedDan} />
        )}
      </div>
    </div>
  );
}

export default App;
