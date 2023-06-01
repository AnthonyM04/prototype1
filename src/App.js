import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={ <Home />} />
        <Route path="*" element={ <Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
