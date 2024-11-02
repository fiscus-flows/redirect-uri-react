import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRedirectHandler from './components/AuthRedirectHandler';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Wildcard route to handle any auth redirect under the /auth path */}
          <Route path="/redirect" element={<AuthRedirectHandler />} />
          {/* Add a fallback for any other routes if needed */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
