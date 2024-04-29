import React from 'react';
import { useMetaMaskTatum } from './useMetaMaskTatum';
import Metamasklogo from './MetaMask_Fox.svg.png';

function MetaMaskTatumButton() {
  const { connectMetaMask, account } = useMetaMaskTatum();

  return (
    <div>
      {account ? (
        <div className="welcomeMessage">
          <h1>Welcome, {account}!</h1>
          <p>Empower Your Enterprise with Blockchain ERP, Unleashing Efficiency, Security, and Unrivaled Transparency.</p>
        </div>
      ) : (
        <div className="loginpageComp">
          <div className="LoginPageApp">
            <div className="App-header">
              <div id="description">
                <h1>Empower Your Enterprise:</h1>
                <h2>A new age, Unleashing Efficiency</h2>
                <h2>Security and Unrivaled Transparency</h2> 
                <button id="mmbtn" onClick={connectMetaMask}>
                  <img id="mmlogo" src={Metamasklogo} alt="MetaMask Logo" /> Connect MetaMask
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MetaMaskTatumButton;
