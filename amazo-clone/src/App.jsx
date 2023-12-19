
 import './App.css'
import Header from './components/Headers/Header'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from './components/checkOut/CheckOut'
import Login from './components/Login/Login';
import { useStateValue } from './components/providers/StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';

const promise = loadStripe(
  'pk_test_51ONgE3J6b64trkxpU8WUF19c0GywZTAIv4V3uHYN5xXEnm2DsVon42KQ0T1QC9kpikzxkuWthRl9YSVo9GJLisUt00JveTQR12'
)
function App() {
const [{user}, dispatch] = useStateValue();

useEffect(() => {
  
  auth.onAuthStateChanged(authUser => {
    //  console.log('THE USER IS >>>', authUser);
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
        
        <Route path="/payment" 
        element={ 
          <> 
            <Header />
            <Elements  stripe={promise}>
            <Payment />
            </Elements>
          </>
        }
          />

        <Route path="/" element={<> <Header /> <Home /> </>} />

        <Route path="/checkout" element={<><Header /> <CheckOut /> </>} />

        <Route path="/orders" element={<><Header /> <Orders /> </>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App
