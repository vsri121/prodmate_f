import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Pomodoro from './components/Pomodoro.jsx';
import ToDoList from './components/todolist.jsx';
import CalendarComponent from './components/CalendarComponent.js';

function App() {
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

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Pomodoro />
                  <ToDoList />
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
