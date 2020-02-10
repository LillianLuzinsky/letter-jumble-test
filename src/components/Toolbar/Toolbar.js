import React from 'react';

import DrawerToggleButton from '../SideDraw/DrawerToggleButton'
import './Toolbar.css';

const toolbar = ({ svgs, handleSetJumble, handleReset }) => {

  const jumbleArr = () => {
    const newArr = new Array(26).fill(null)
    const randomPos = () => Math.floor(Math.random() * 26);
    svgs.forEach(el => {
      let found = false;
      let random = randomPos();
      while (!found) {
        if (!newArr[random]) {
          newArr[random] = el;
          found = true;
        } else {
          random = randomPos();
        };
      };
    });
    handleSetJumble(newArr);
  };
  
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div>
          <DrawerToggleButton/>
        </div>
        <div className="toolbar__logo">
          <a href="/">letter jumble</a>
        </div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
                <button onClick={jumbleArr} id="jumble">Jumble</button>
            </li>
            <li>
                <button onClick={handleReset} id="reset">Reset</button>
            </li>
            <li>
              <a href="/spelling">
                <button id="spelling">Spelling</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default toolbar;