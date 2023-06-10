import React from "react";
import Demo from './Demo';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Components/Home'
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navigation from "./Components/Navigation";

class App extends React.Component{
  state={
    companyName:"Codegnan",
    companyNumber:101,
  }
  render(){
    return(
      <div>
        <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
        {/* <h1>Good Afternoon</h1>
        <p>Company Name is {this.state.companyName}</p>
        <p>Company Number is {this.state.companyNumber}</p>
        <Demo name="Sai" company="Codegnan"/>
        <Demo name="Surya" company="Amazon"/> */}
      </div>
    )
  }
}

export default App
