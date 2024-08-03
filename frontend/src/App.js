import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from "./components/Wrapper"
import Home from './pages/Home';
import Connexion from './pages/Login/Connexion';
import Register from './pages/Login/Register';


function App() {
  return (
   <BrowserRouter>
   <Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   </Wrapper>
   </BrowserRouter>
  );
}

export default App;
