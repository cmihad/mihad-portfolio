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
       
          {/* You can render <Route> and <NavTabs /> here */}
         
         
          </div>
            <div class="relative text-center customfont flex h-screen">
              <div class="m-auto">
              <h1 className="foo" >🅼🅸🅷🅰🅳</h1>
                <h2 className="font-extrabold text-6xl text-center"> Front End Engineer </h2>
                <div className="text-center m-2 ">
                  <ul className="inline-flex flex-row p-2">
                
                    <li className="z-50 ">                                      
                    <a target="_blank" href="https://www.linkedin.com/in/cmihad/">
                    <img src="https://img.icons8.com/metro/104/000000/linkedin.png"/></a>
                    </li>
                    
                    
                    <li className="z-50"> 
                    
                    <a target="_blank" href="http://m.me/mihad.choudhury"><img src="https://img.icons8.com/pastel-glyph/128/000000/facebook-messenger--v2.png"/></a>
                    </li>
                    
                                         
                    <li className="z-50"> 
                      <a target="_blank" href="mailto:cmihad@gmail.com">
                      <img src="https://img.icons8.com/ios-filled/100/000000/email-open.png"/></a>
                    </li>

                    <li className="z-50"> 
                   
                    <a target="_blank" href="https://wa.me/8801726708183"><img src="https://img.icons8.com/pastel-glyph/128/000000/whatsapp--v2.png"/></a>
                    </li>
                    
                    <li className="z-50">                     
                    <a target="_blank" href="https://github.com/cmihad">
                    <img src="https://img.icons8.com/ios-glyphs/120/000000/github.png"/>
                    </a>
                    </li>
                    
                    <li className="z-50">                       
                    <a target="_blank" href="https://open.spotify.com/playlist/3jsELHGo2kXkYGKOQWxdTm?si=JqO6V8NrQu64dvcmSeNKWQ ">
                    <img src="https://img.icons8.com/metro/104/000000/spotify.png"/>
                    </a>
                    </li>
                   

                  </ul>
                </div>
              </div>
          </div>
          </div>
      
          </Router>
  );
}
export default App;