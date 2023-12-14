
 import './App.css'
import Header from './components/Headers/Header'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from './components/checkOut/CheckOut'
import Login from './components/Login/Login';
import { useStateValue } from './components/providers/StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';

function App() {
const [{user}, dispatch] = useStateValue();

useEffect(() => {
  
  auth.onAuthStateChanged(authUser => {
    // console.log('THE USER IS >>>', authUser);
    if (authUser) {
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
    
}, []);
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          
        <Route path="/Login" element={<Login />} />
        
       
        <Route path="/" element={<> <Header /> <Home /> </>} />

        <Route path="/checkout" element={<><Header /> <CheckOut /> </>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App
