import React from 'react';
import AppFooter from './cmps/AppFooter';
import AppHeader from './cmps/AppHeader';
import Home from './pages/Home';

function App() {
  return (
    <div className="app bg-light">
      <div className="main-container">
        <AppHeader />
        <Home />
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
