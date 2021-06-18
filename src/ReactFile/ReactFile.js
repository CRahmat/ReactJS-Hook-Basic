import React from 'react';
import logo from '../logo.svg';
import "./ReactFile.css"
import Title from "../Title/Title"

const ReactFile = () =>{
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
        </header>
      </div>
    );
}

export default ReactFile