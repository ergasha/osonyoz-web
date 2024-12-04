import React, { useEffect, useState } from 'react';
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import axios from './services/axios';

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const telegramUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;

      if (telegramUserId) {
        clearInterval(interval); // Stop checking once `userId` is found
        setUserId(telegramUserId);

        // Send the POST request
        axios
          .post(
            'http://193.180.208.4:8000/add-user',
            { user_id: telegramUserId },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then(() => {
            console.log('User successfully added.');
          })
          .catch((error) => {
            console.error('Error sending POST request:', error);
          });
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array to run once

  return (
    <div className="App">
      <Header />
      {userId ? (
        <h1>Welcome Telegram User: {userId}</h1>
      ) : (
        <h1>Loading Telegram Data...</h1>
      )}
      <Info />
      <FontConverter />
      <TesseractScan />
      <Footer />
    </div>
  );
}

export default App;
