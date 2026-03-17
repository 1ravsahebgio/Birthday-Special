import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 6) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

useEffect(() => {
  const handleMessage = (event) => {
    if (event.data?.type === 'NEXT_PAGE') {
      nextPage();
    }
    if (event.data?.type === 'PREV_PAGE') {
      prevPage();
    }
    if (event.data?.type === 'RESTART') {
      setCurrentPage(1);
    }
  };
  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}, [currentPage]);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <iframe
        src={`/Birthday-Special/page${currentPage}/page${currentPage}.html`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        title={`Page ${currentPage}`}
      />
    </div>
  );
}

export default App;