import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
 
const Master=()=>{

    return(
     <div className="sb-nav-fixed">
      <Navbar/>
            <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                    <Sidebar/>
                    </div>
                    <div id="layoutSidenav_content">
                    <Footer/>    
                    </div> 
            </div>
     </div>
    );
} 

export default Master();