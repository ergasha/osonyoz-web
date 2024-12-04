import React, { useState } from 'react';
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import axios from './services/axios';
import { useEffect } from 'react';

function App() {
  const [user,setUser] = useState('123')
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // Call this to notify Telegram that the Web App is fully loaded
      tg.expand(); // Optional: Expands the app to full screen
  
      // Log initData to verify it exists
      console.log('initData:', tg.initData);
  
      const userId = tg.initDataUnsafe?.user?.id; // Safely access user data
      setUser(userId)
      console.log('User ID:', userId);
  
      if (userId) {
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
  }, [user]);

  return (
    <div className="App">
        <Header />
        {user ? (<h1>{user}</h1>):(
          <h1>No</h1>
        )}
        <Info />
        <FontConverter />
        <TesseractScan />
        <Footer />
    </div>
  );
}

export default App;
