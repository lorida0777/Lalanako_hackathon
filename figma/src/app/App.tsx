import { useState } from 'react';
import Home from '../pages/Home';
import CodeCivil from '../pages/CodeCivil';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'code') {
    return <CodeCivil onNavigate={handleNavigate} />;
  }

  return <Home onNavigate={handleNavigate} />;
}