import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App

