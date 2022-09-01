import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  const handleClick = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
  };
  return (
    <div>
      <button onClick={handleClick} type="button">
        Test
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
