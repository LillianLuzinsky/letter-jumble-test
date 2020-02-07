import React from 'react';
import './DrawerToggleButton.css';

class drawerToggleButton extends React.Component {

  handleClick = () => {
    console.log('Clicked!');
    //toggle from visible = false to visible = true
    
  }

  render() {
    return (<button className="toggle-button" onClick={this.handleClick}>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
    </button>);
  }
}

export default drawerToggleButton;