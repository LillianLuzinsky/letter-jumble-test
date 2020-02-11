import React, { Component } from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavabr from './MobileNavbar'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <DesktopNavbar />
        <MobileNavabr />
      </div>
    )
  }
}
