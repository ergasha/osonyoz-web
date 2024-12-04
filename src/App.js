import React, { useEffect } from 'react';
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import { useEffect } from 'react';
import User from './services/userService';

function App() {
  useEffect(() => {
    const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id; 
    const check = async () => {
      await User.check_user(userId)
    } 
    if (userId){
      check();
    }
  }, []);

  return (
    <div className="App">
        <Header />
        <Info />
        <FontConverter />
        <TesseractScan />
        <Footer />
    </div>
  );
}

export default App;
