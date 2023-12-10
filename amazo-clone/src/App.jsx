
import './App.css'
import Header from './components/Headers/Header'
import Home from './components/Home/Home'
import { OpenInBrowser as Router, Switch, Route } from  'react-router-dom';
import CheckOut from './components/checkOut/CheckOut'
function App() {


  return (
    <Router>
      <div className="App"> 
      <Switch>
      <Route  path="/CheckOut">
      <Header  />
      <CheckOut  />
      </Route>

      <Route  path="/">
      <Header  />
      <Home />
      </Route>
      </Switch>


      </div>
    </Router>
  )
}

export default App
