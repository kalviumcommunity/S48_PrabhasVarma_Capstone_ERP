import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import MetaMaskTatumButton from './Metamask/MetaMaskButton.jsx'
import { useMetaMaskTatum } from './Metamask/useMetaMaskTatum.tsx';

function Loginpage() {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const { connectMetaMask, account } = useMetaMaskTatum();

  const handleMetaMaskConnect = async () => {
    await connectMetaMask();
    setIsMetaMaskConnected(true);
  };

  useEffect(() => {
    if (account) {
      setIsMetaMaskConnected(true);
    }
  }, [account]);

  return (
    
 <>{isMetaMaskConnected?
  null
 :
     <MetaMaskTatumButton onConnect={handleMetaMaskConnect} />


 }
</>
    
  );
}

export default Loginpage;