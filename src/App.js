import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRedirectHandler from './components/AuthRedirectHandler';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Catch-all route to handle any path and render AuthRedirectHandler */}
          <Route path="*" element={<AuthRedirectHandler />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
