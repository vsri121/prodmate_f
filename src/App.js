import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

unction App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to ProdMate!</h1>
          <nav>
            <Link to="/">Pomodoro</Link> |{' '}
            <Link to="/calendar">Calendar</Link>
          </nav>
        </header>

        {/* Main content area: show both on home, or separate routes */}
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Pomodoro />
                  <ToDoList/>
                  
                </>
              }
            />
            <Route path="/calendar" element={<CalendarComponent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
