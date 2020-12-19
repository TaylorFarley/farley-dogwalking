import React, {useContext} from "react";
import {Link } from 'react-router-dom';
import $ from "jquery";
import axios from 'axios'
import UserContext from "../context/UserContext";
const Nav = () => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)
  return (
    <header id="main-header" data-height-onload="66">
      <div class="container clearfix et_menu_container">
        <div class="title_container">
          <h1>
            <a
              href="https://www.elegantthemes.com/layouts/services/dog-walker-landing-page"
              title="Divi Builder Layout Pack"
            >
              Dog Walker Landing{" "}
            </a>
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
                <a href="https://www.elegantthemes.com/layouts/services/dog-walker-services-page/live-demo">
                  Services
                </a>
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
                <a href="https://www.elegantthemes.com/layouts/services/dog-walker-contact-page/live-demo">
                  Contact
                </a>
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
         
          <div id="et_mobile_nav_menu">
            <div class="mobile_nav closed">
              <span class="select_page">Select Page</span>
              <span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
            </div>
          </div>{" "}
        </div>
      </div>
      <div class="et_search_outer">
        <div class="container et_search_form_container">
          <form
            role="search"
            method="get"
            class="et-search-form"
            action="https://www.elegantthemes.com/layouts/"
          >
            <input
              type="search"
              class="et-search-field"
              placeholder="Search &hellip;"
              value=""
              name="s"
              title="Search for:"
            />{" "}
          </form>
          <span class="et_close_search_field"></span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
