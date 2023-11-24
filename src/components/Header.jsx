import React from "react";

import logo from "./netflix.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { PiTranslate } from "react-icons/pi";
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/esm/Button';

function Header() {
  return (
    <div className="containers">
      <img className="container-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>

      <div className="logo" style={{ display: "flex",justifyContent:"space-between" }}>
        <div className="logo-image">
        
          <Link to='/'><img src={logo} alt="not found"/></Link>
          
         
          {/* <Link to="/home"><Button>heyyy</Button></Link> */}
        </div>
        

        <div className="right" style={{ display: "flex"}}>
        
          <DropdownButton data-bs-theme="dark" className="btn-primary"  title={<span><PiTranslate/>English</span>}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <button className="signin">Sign In</button>
        </div>
      </div>
      <div className="para">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>

        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="textb">
        <input type="text" placeholder="     Email address"/>
        <button>Get Started </button>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
