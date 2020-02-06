import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
          <button id="jumble">Jumble</button>
      </li>
      <li>
        <a href="/spelling">
          <button id="spelling">Spelling</button>
        </a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;