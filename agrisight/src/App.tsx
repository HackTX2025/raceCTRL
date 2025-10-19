'use client'

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'insights':
        return <Dashboard />;
      case 'about':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 overflow-hidden">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
