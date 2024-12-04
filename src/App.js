import React, { useEffect, useState } from 'react';
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import User from './services/userService';

function App() {
  const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id; 
  const [data,setData] = useState()
  useEffect(() => {
    const check = async () => {
      const res = await User.check_user(userId)
      setData(res.data)
    } 
    if (userId){
      check();
    }
  }, []);

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
