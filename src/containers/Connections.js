import React from 'react';
import styled from 'styled-components';

function Connections() {
  const ConnectionsStyles = styled.div`
    width: 220px;
    height: 380px;
    padding: 0;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    box-shadow: -2px 4px #D0D3D6;

    h1 {
      color: #0077B5;
      font-size: 2.5rem;
    }

    h1, h3 {
      color: #0077B5;
    }

    .connectionsNumber {
      width: 100%;
      height: 200px;
      border: 1px solid #CACCCE;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
    }

    button {
      width: 130px;
      height: 30px;
      margin: 15px 0 0 0;
      color: #0077B5;
      border: 1px solid #CACCCE;
    }

    .learnMore {
      width: 100%;
      border: 1px solid #CACCCE;
      border-top: 0px;
      margin: 0;
      background-color: #E6E9EC
    }

  `;

  return (
    <ConnectionsStyles className='connections'>
      <div className='connectionsNumber'>

        <h3>No groups yet</h3>
        <h4>Once you join groups, you will see them here</h4>
        
      </div>

      <div className='learnMore'>
        <h3>Your contact import is ready</h3>
        <h4>Connect with your contacts and never lose touch</h4>
      </div>

    </ConnectionsStyles>
  )
}

export default Connections;