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
    console.log('Telegram Object:', window.Telegram);
    console.log('initDataUnsafe:', window.Telegram?.WebApp?.initDataUnsafe);
  
    const check = async () => {
      if (window.Telegram?.WebApp?.initDataUnsafe?.user?.id) {
        const userId = window.Telegram.WebApp.initDataUnsafe.user.id;
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
          setUserId(userId);
        } catch (error) {
          console.error('Error sending POST request:', error);
        }
      } else {
        console.error('Not accessed from Telegram or initDataUnsafe is undefined.');
      }
    };
  
    check();
  }, []);
  

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
