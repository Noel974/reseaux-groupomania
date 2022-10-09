import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.css'
import Nav from "./components/Nav/Navbar";
import Routes from "./routes";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
