import "./App.css";
import background from "./gymhd.jpg";
import logo from "./aexelogo.png";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
        
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat",
     height: '100vh', width: '100wh', backgroundSize: 'cover',  }}>

      <div class="full-page;"> 
          <div className="App">
                <div class="form-box">
                  <div class="form">
                      <form class="login-form">
                      
                        <p><img src={logo} alt="Logo" width="85" height="85"></img></p>


                          <input type="text"placeholder="username"/>
                          <input type="password"placeholder="password"/>
                          

                                <p class="link1">
                                <a href="#">Forgot password?</a></p>

                                <button type="submit" className="loginbtn">Login</button>
                                <button type="submit" className="signupbtn">Signup</button>
                                
      
                               
                      </form>
                    
                  </div>
                </div>                 
            </div> 
      </div>
    </div>   
  );
}
 
export default App;
