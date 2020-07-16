import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core'
import './App.css';
import './Login.css';
import MusicPanel from './MusicPanel.js'
import NewAppBar from './NewAppBar.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      loggedIn: false,
    };
  }

  checkLoggedIn = (e) => {
    this.setState({
        loggedIn: !this.state.loggedIn,
        
    })
    alert('You Have Logged In!')
  }

  render() {
    return this.state.loggedIn ? <MusicPanel /> : (
      <div>
        <header className="u-clearfix u-header u-palette-2-base u-header" id="sec-7425"><div className="u-clearfix u-sheet u-valign-top u-sheet-1">
            <a href="#" className="u-image u-logo u-image-1">
              <img src="C:\Users\Ryan\Desktop\Angular Projects\School\Musicapp\music-app\src\images\AmarilloCare.jpg" className="u-logo-image u-logo-image-1" data-image-width={91} />
            </a>
            <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
              <div className="menu-collapse" style={{fontSize: '1rem', letterSpacing: 0}}>
                <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base u-text-palette-5-base" href="#">
                  <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger" /></svg>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style={{width: '16px', height: '16px'}}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                      </symbol>
                    </defs></svg>
                </a>
              </div>
              <div className="u-custom-menu u-nav-container">
                <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" href="Home.html" style={{padding: '10px 20px'}}>Home</a>
                  </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" style={{padding: '10px 20px'}}>Register</a>
                  </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" style={{padding: '10px 20px'}}>Login</a>
                  </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" href style={{padding: '10px 20px'}}>Page 1</a>
                  </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" href style={{padding: '10px 20px'}}>Page 1</a>
                  </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" href style={{padding: '10px 20px'}}>Page 1</a>
                  </li></ul>
              </div>
              <div className="u-custom-menu u-nav-container-collapse">
                <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                  <div className="u-menu-close" />
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="Home.html" style={{padding: '10px 20px'}}>Home</a>
                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link" style={{padding: '10px 20px'}}>Register</a>
                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link" style={{padding: '10px 20px'}}>Login</a>
                    </li></ul>
                </div>
                <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
              </div>
            </nav>
          </div></header>
        <section className="u-clearfix u-section-1" id="sec-7efb">
          <div className="u-clearfix u-sheet u-sheet-1">
            <h2 className="u-text u-text-1">User Login</h2>
            <div className="u-align-center u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-group-1">
              <div className="u-container-layout u-container-layout-1">
                <p className="u-text u-text-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            </div>
            <div className="u-container-style u-expanded-width u-group u-white u-group-2">
              <div className="u-container-layout u-container-layout-2" />
            </div>
          </div>
        </section>
        <div className="App">
          <newappbar>
            <textfield label="Username: ">
              <textfield label="Password: ">
                <button loggedin="{this.state.loggedIn}" onclick="{this.checkLoggedIn}" variant="contained">Submit</button> 
              </textfield></textfield></newappbar></div>
        <footer className="u-align-left u-clearfix u-footer u-grey-80 u-footer" id="sec-45ef"><div className="u-clearfix u-sheet u-sheet-1">
            <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          </div></footer>
        <section className="u-backlink u-clearfix u-grey-80">
          <a className="u-link" href="https://nicepage.com/html" target="_blank">
            <span>HTML Template</span>
          </a>
          <p className="u-text">
            <span>created with</span>
          </p>
          <a className="u-link" href="https://nicepage.com/html" target="_blank">
            <span>Nicepage</span>
          </a>. 
        </section>
      </div>
    )
  }
}  


export default App;
