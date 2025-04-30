import logo from './logo.svg';
import './App.css';
import Pomodoro from './components/pomodoro';
import ToDoList from './components/todolist';

function App() {
  return (
    <div className="App">
      <Pomodoro/>
      <ToDoList/>
    </div>
  );
}

export default App;
