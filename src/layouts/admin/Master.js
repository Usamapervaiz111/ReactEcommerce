import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";
import "../../assets/admin/js/scripts";
 
const Master=()=>{

    return(
     <div className="sb-nav-fixed">
      <Navbar/>
            <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                    <Sidebar/>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            Dashboard
                        </main>
                    <Footer/>    
                    </div> 
            </div>
     </div>
    );
} 

export default Master;