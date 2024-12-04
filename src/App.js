import React from 'react';
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import axios from './services/axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // Call this to notify Telegram that the Web App is fully loaded
      tg.expand(); // Optional: Expands the app to full screen
  
      // Log initData to verify it exists
      console.log('initData:', tg.initData);
  
      const userId = tg.initDataUnsafe?.user?.id; // Safely access user data
      console.log('User ID:', userId);
  
      if (userId) {
        axios.post('https://your-server.com/telegram-user', {
          telegramId: userId,
        })
        .then(response => {
          console.log('User data sent successfully:', response.data);
        })
        .catch(error => {
          console.error('Error sending user data:', error);
        });
      }
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
