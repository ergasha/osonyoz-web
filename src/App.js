import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import  { useEffect, useState } from 'react';


function App() {
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    const user = tg.initDataUnsafe?.user;
    if (user?.id) {
        setChatId(user.id); 
        console.log(chatId);
        
    } else {
        console.warn("User ID not found in initData.");
    }
}, []);


  return (
    <div className="App">
      {chatId ? (
        <h1>{chatId}</h1>
      ):(
        <h1>No</h1>
      )}
        <Header />
        <Info />
        <FontConverter />
        <TesseractScan />
        <Footer />
    </div>
  );
}

export default App;
