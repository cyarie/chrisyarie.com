import React, { Component } from 'react';
import NavTabs from '../NavTabs/NavTabs';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row main-div">
          <div className="col-md-10">
            <div className="text-left">
              <h1><strong>Chris Yarie</strong></h1>
              <NavTabs/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
