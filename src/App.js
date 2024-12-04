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
    const check = async () => {
      const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id; // Access at runtime
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
          setUserId(userId); // Update state only if POST request succeeds
        } catch (error) {
          console.error('Error sending POST request:', error);
        }
      } else {
        console.log('Not accessed from Telegram.');
      }
    };

    check();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="App">
      <Header />
      {userId ? (
        <h1>Welcome Telegram User: {userId}</h1>
      ) : (
        <h1>Not accessed from Telegram</h1>
      )}
      <Info />
      <FontConverter />
      <TesseractScan />
      <Footer />
    </div>
  );
}

export default App;
