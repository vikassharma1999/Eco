import React from 'react';

import './App.css';
import Header from './components/header'
import Login from './components/Login'
import Signup from './components/Signup'
import Footwear from './components/Men/Footwear'
import Clothings from './components/Men/Clothings'
import Watches from './components/Men/Watches'
import Footwear_ from './components/Women/Footwear'
import Clothings_ from './components/Women/Clothings'
import Watches_ from './components/Women/Watches'
import Footwear__ from './components/Kids/Footwear'
import Clothings__ from './components/Kids/Clothings'
import BabyCare from './components/Kids/BabyCare'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
     <Switch>
       <Route path="/" exact component={Home} />
     <Route path="/login" component={Login} />
     <Route path="/signup" component={Signup}/>
     <Route path="/men/footwear" component={Footwear}/>
     <Route path="/men/clothings" component={Clothings}/>
     <Route path="/men/watches" component={Watches}/>
     <Route path="/women/footwear" component={Footwear_}/>
     <Route path="/women/clothings" component={Clothings_}/>
     <Route path="/women/watches" component={Watches_}/>
     <Route path="/kids/footwear" component={Footwear__}/>
     <Route path="/kids/clothings" component={Clothings__}/>
     <Route path="/kids/babycare" component={BabyCare}/>
     </Switch>
    </div>
    </Router>
  );
}
const Home = () =>{
  return(
  <div>
    Home 
  </div>)
}
export default App;
