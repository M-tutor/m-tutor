import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './screens/dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
