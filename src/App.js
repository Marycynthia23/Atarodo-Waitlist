import HomePage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from "./commons/Success/Success";
import Failed from "./commons/Failed/Failed";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
