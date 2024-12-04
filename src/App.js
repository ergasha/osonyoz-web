import React, { useEffect, useState } from 'react';
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import axios from './services/axios';

function App() {
  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id; 
  useEffect(() => {
    const check = async () => {
      if (userId) {
        try {
          await axios.post(
            'http://193.180.208.4:8000/add-user',
            { user_id: userId },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
        } catch (error) {
          console.error('Error sending POST request:', error);
        }
      } else {
        console.error('User ID not found.');
      }
    };
  
    check();
  }, []); 
  

  return (
    <div className="App">
        <Header />
        {userId ? (<h1>{userId}</h1>):(<h1>No</h1>)}
        <Info />
        <FontConverter />
        <TesseractScan />
        <Footer />
    </div>
  );
}

export default App;
