import logo from './logo.svg';
import './App.css';
import LandingPage from './page/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './page/Cart';
import Discover from './page/Discover';
import DefaultLayout from './layout/DefaultLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/waroengq" name="Home" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
