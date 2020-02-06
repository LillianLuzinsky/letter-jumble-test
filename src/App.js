import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDraw/SideDrawer';
import './App.css';

function App() {
  return (
    <React.Fragment style={{height: '100%'}}>
      <Toolbar />
      <SideDrawer/>
      <main style={{marginTop: '56px'}}>
        <h1>hello</h1>
      </main>
    </React.Fragment>
  );
}

export default App;
