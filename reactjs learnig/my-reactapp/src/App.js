import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import List from './pages/list';

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/list' element={<List/>} />
    </Routes>
    </Router>
  );
}

export default App;
