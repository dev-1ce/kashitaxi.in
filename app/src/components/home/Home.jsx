import React from "react";
import './home.css';
import HomeCarousel from "./HomeCarousel";
import Buttons from "./Buttons";
import Package from "./Package";
import Blogs from "./Blogs";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Outstation Taxi Service in Varanasi | Vinayak travels | Car rental for local and outstation
        </title>
      </Helmet>      
      <div className="bg-home center-aligned-home">
        <div>
          <HomeCarousel />
          <Buttons />
        </div>        
      </div>    
      <Package />  
      <Blogs />
    </React.Fragment>
  );
}

export default Home;
