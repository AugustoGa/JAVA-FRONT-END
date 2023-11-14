import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Container from './Components/Container';
import Compra from './Components/Compra';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      
        <Routes>
        <Route path="/" element={<Container/>} />
          <Route path="/compra" element={<Compra/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
