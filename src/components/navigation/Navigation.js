import React from "react";
import "../navigation/Navigation.css"

const Navigation = ({onRouteChange}) => {
  return (

  <nav >
    <span onClick={() => onRouteChange('signin')} className='login'> Sign out</span>
    
  </nav>
  )
};

export default Navigation;
