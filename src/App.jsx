import { useState } from "react";
import SoftSellLandingPage from "./SoftSellLandingPage";
import SEO from "./SEO";
import './App.css'; // or wherever you placed the pulse-glow animation


function App() {  
  return (
    <div>
       <SEO
        title="Sell Unused Software Licenses | SoftSell"
        description="Turn your unused software licenses into cash quickly and securely with SoftSell."
        keywords="sell software license, unused software, license resale, SoftSell"
        // image="https://yourdomain.com/social-preview.jpg"
        // url="https://yourdomain.com"
      />
     <SoftSellLandingPage/>
    </div>
  );
}

export default App;
