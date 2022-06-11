import React from "react";
import { useState } from 'react'
import "./toolbar.css";

function Toolbar() {

const [showList, setShowList] = useState(false);
// const [showHamburger, setShowHamburger] = useState(false);

// const Hamburger = () => {
//   setShowHamburger(!showHamburger)
// }

const ListShowing = () => {
  setShowList(!showList)
}

  return (
    <>
      <nav class="navigation-bar">
        <h1>Fiber</h1>
        <ul class="media-nav">
          <li>Community</li>
          <li class="media-mid-li">Pricing</li>
          <li>Features</li>
        </ul>
        <div class="media-btn">
          <button class="sign">Sign In</button>
          <button class="sign">Sign Up</button>
        </div>
        <img
        onClick={ListShowing}
          class= {showList ? null : "hamburger-block hamburger-click"}
          src="images/Hamburger Menu.svg"
          width="20"
          alt="hamburger menu icon"
        />
      </nav>
      <ul class={ showList ? "list" : "hidden-ul"}>
        <li>Community</li>
        <li>Pricing</li>
        <li>Features</li>
        <li>
          <button class="sign">Sign In</button>
        </li>
        <li>
          <button class="sign">Sign Up</button>
        </li>
      </ul>
    </>
  );
}

export default Toolbar;
