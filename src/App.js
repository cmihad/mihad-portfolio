import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleComponent from  './components/ParticleComponent';

function App() {
  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <h1>Testing</h1>
          {/* You can render <Route> and <NavTabs /> here */}
         
         
          </div>
            <div class="flex h-screen">
              <div class="m-auto">
              <h1 className=" text-6xl" >🅼🅸🅷🅰🅳</h1>
            
              </div>
          </div>
          </div>
      
          </Router>
  );
}
export default App;