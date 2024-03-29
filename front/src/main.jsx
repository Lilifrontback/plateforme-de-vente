import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

// Installation npm install
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Product from './Product.jsx'
import NavBar from './composants/NavBar';
import Connexion from './composants/Connexion.jsx'
import Footer from './composants/Footer.jsx'
import Admin from './Admin.jsx'
import Inscription from './composants/Inscription.jsx'
localStorage.removeItem('chakra-ui-color-mode');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Path = '/' -> page par défaut */}
          <Route path="/product/:id" element={<Product />} />
          {/* Path = '/"exemple"' -> permet d'accder à la page correspondante voir <Link> page Home */}
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
)
