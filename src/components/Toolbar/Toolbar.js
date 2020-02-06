import React from 'react';

import DrawerToggleButton from '../SideDraw/DrawerToggleButton'
import './Toolbar.css';

const toolbar = props => (
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
            <a href="/jumble">
              <button id="jumble">Jumble</button>
            </a>
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

export default toolbar;