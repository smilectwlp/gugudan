import { useState } from 'react'
import './App.css'

function App() {
  const [viewMode, setViewMode] = useState('all') // 'all' or 'single'
  const [selectedDan, setSelectedDan] = useState(2)

  const createGugudanCard = (dan) => {
    const items = []
    for (let i = 1; i <= 9; i++) {
      const result = dan * i
      items.push(
        <div key={i} className="gugudan-item">
          <span className="equation">{dan} × {i}</span>
          <span className="result">{result}</span>
        </div>
      )
    }

    return (
      <div key={dan} className="gugudan-card">
        <div className="gugudan-title">{dan}단</div>
        {items}
      </div>
    )
  }

  const showAllTables = () => {
    setViewMode('all')
  }

  const showSingleTable = () => {
    const dan = prompt('몇 단을 보시겠습니까? (2-9)', '2')
    const danNumber = parseInt(dan)

    if (danNumber >= 2 && danNumber <= 9) {
      setSelectedDan(danNumber)
      setViewMode('single')
    } else {
      alert('2부터 9 사이의 숫자를 입력해주세요!')
    }
  }

  return (
    <div className="container">
      <h1>🔢 구구단 곱셈표 🔢</h1>
      
      <div className="controls">
        <button 
          className={`btn ${viewMode === 'all' ? 'active' : ''}`}
          onClick={showAllTables}
        >
          전체 보기
        </button>
        <button 
          className={`btn ${viewMode === 'single' ? 'active' : ''}`}
          onClick={showSingleTable}
        >
          단 선택
        </button>
      </div>

      <div className="gugudan-grid">
        {viewMode === 'all' 
          ? Array.from({ length: 8 }, (_, i) => i + 2).map(dan => createGugudanCard(dan))
          : createGugudanCard(selectedDan)
        }
      </div>
    </div>
  )
}

export default App
