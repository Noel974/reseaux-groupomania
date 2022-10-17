import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss'
import Nav from "./components/Nav/Navbar";
import Routes from "./routes";
import Footer from "./components/Footer/Footer";
import { AdminProvider } from "./utils/utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  return (
    <div className="App">
      <AdminProvider>
        <BrowserRouter>
          <Nav />
          <Routes />
          <Footer />
        </BrowserRouter>
      </AdminProvider>
    </div>
  );
}

export default App;
