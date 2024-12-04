import React, { useEffect, useState } from 'react';
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import User from './services/userService';
import axios from './services/axios';

function App() {
  const [userId,setUser] = useState()
  useEffect(() => {
    const check = async () => {
      const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id; 
      axios.post('http://193.180.208.4:8000/add-user',{'user_id':userId});
      setUser(userId)
    } 
    check()
  }, [userId]);

  return (
    <div className="App">
        <Header />
        {userId ? (<h1>{userId} and {data}</h1>):(<h1>No</h1>)}
        <Info />
        <FontConverter />
        <TesseractScan />
        <Footer />
    </div>
  );
}

export default App;
