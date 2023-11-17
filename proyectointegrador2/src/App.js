import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Container from './Components/Container';
import Compra from './Components/Compra';
import { useState } from 'react';

function App() {
  
  const [allEntradas, setAllEntradas] = useState ([]);
  const [total, setTotal] = useState(0);
  const [countEntradas, setCountEntradas] = useState(0);



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
