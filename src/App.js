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
    // Check if the app is accessed from Telegram
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      // Get the user info from Telegram Web App context
      const userId = tg.initDataUnsafe?.user?.id;

      if (userId) {
        // Send a POST request to your server with the user's Telegram ID
        axios.post('http://193.180.208.4:8000/add-user', {
          user_id: userId,
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
