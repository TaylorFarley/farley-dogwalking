import React, {useContext} from "react";
import {Link } from 'react-router-dom';
import $ from "jquery";
import axios from 'axios'
import UserContext from "../context/UserContext";

const Nav = () => {
  const { userData, setUserData } = useContext(UserContext);


  let [ menuStatus, setMenuStatus] = React.useState('none')
  return (
    <header id="main-header" data-height-onload="66">
      <div class="container clearfix et_menu_container">
        <div class="title_container">
          <h1>
            <img src="images/logo.webp" style={{width:"125px", height:"50px"}}></img>
       
            {" "}
            
          </h1>
        </div>
        <div id="et-top-navigation" data-height="66" data-fixed-height="40">
          <nav id="top-menu-nav">
            <ul id="top-menu" class="nav">
              <li
                id="menu-item-226590"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226590"
              >
                  <Link to="/">Home</Link>
                
              </li>
              <li
                id="menu-item-226592"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226592"
              >
                <Link to="/#services">Services N' Rates</Link> 
              </li>
              <li
                id="menu-item-226594"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226594"
              >
              
                <Link to="/BookAppointment">Online Booking</Link> 
                
              </li>
           
              <li
                id="menu-item-226598"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226598"
              >
                  <Link to="/#contact">Contact Us</Link> 
              </li>

              {userData.email?(<li
                id="menu-item-226598"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226598"
                style={{cursor:"pointer"}}
                onClick={()=>{
                  console.log('clicked')
                  localStorage.setItem("auth-token", "");
                  const logoutstat = axios
                  .post("/auth/logout")
                  .then((res) => {
                    setUserData({email: null,
                      googleId: null,
                      username: null,      
                      address:null,
                      phone: null}) 
                                         
                  });
                }}
              >Log Out</li>):null}
             
            </ul>{" "}
          </nav>
         
         
        </div>
      </div>
      
      <div id="et_mobile_nav_menu" onClick={()=>{
        if(menuStatus==='none'){
          setMenuStatus('block')
        }
        else{
          setMenuStatus('none')
        }
      }}>
        <div className="mobile_nav closed">
          <span className="select_page">Select Page</span>
          <span className="mobile_menu_bar mobile_menu_bar_toggle" style={{padding:"50px;"}}/>
          <ul id="mobile_menu" className="et_mobile_menu" style={{display: menuStatus}}>
            <li id="menu-item-226590" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-226589 current_page_item menu-item-226590 et_first_mobile_item"><a href="https://www.elegantthemes.com/layouts/services/dog-walker-home-page/live-demo" aria-current="page">Home</a></li>
            <li id="menu-item-226592" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-226592"><a href="https://www.elegantthemes.com/layouts/services/dog-walker-services-page/live-demo">Services</a></li>
            <li id="menu-item-226594" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-226594"><a href="https://www.elegantthemes.com/layouts/services/dog-walker-blog-page/live-demo">Blog</a></li>
            <li id="menu-item-226596" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-226596"><a href="https://www.elegantthemes.com/layouts/services/dog-walker-about-page/live-demo">About</a></li>
            <li id="menu-item-226598" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-226598"><a href="https://www.elegantthemes.com/layouts/services/dog-walker-contact-page/live-demo">Contact</a></li>
            <li id="menu-item-226600" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-226600"><a href="https://www.elegantthemes.com/layouts/services/dog-walker-landing-page/live-demo">Landing</a></li>
            <li id="menu-item-226602" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-226602"><a href="https://www.elegantthemes.com/layouts/services/dog-walker-how-it-works-page/live-demo">How It Works</a></li>
          </ul></div>
      </div>
    </header>
  );
};

export default Nav;
