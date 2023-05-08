import React from 'react'
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Details from './Components/Details';
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
       <Routes>
          <Route path='/details' element={<Details/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
       </Routes>
      </Router>
    </div>
  )
}

export default App;