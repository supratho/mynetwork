import React from 'react';
import './Promoted.css'

function Promoted() {

  return (
    <div>
      <div className="promoted">
        <img src={require('../images/adv.jpg')} />
      </div>

      <br /><br />
      <footer>
        <p>LinkedIn Corporation © 2019</p>
      </footer>
    </div>

  )
}

export default Promoted;
