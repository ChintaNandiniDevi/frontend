import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from "./component/Register";
import Login from "./component/Login";
import ContactComponent from "./component/ContactComponent";
import SucessComponent from "./component/SucessComponent";
import { useState } from 'react';
import ListWashpackComponent from './component/ListWashpackComponent';


function App() {


  


  return (
    <>
    
    <Navbar/>
    

    
    
     <Router>
      <Routes>
        
          <Route path="/" element={<Home/>} exact/>
          <Route path="/register" element={<Register/>} exact/>
          <Route path="/login" element={<Login/>} exact/>
          <Route path="/contact" element={<ContactComponent/>} exact/>
          <Route path="/sucess" element={<SucessComponent/>} exact/>
          <Route path="/washpack" element={<ListWashpackComponent/>} exact/>
        
      </Routes>
    </Router> 


  
    </>
  );
}

export default App;
