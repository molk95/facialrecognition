import React from "react";
import "../navigation/Navigation.css"

const Navigation = ({onRouteChange, isSignedIn}) => {
  
    if (isSignedIn) {
      return (
        <nav >
       <span onClick={() => onRouteChange('signin')} className='login'> Sign out</span>
        </nav>

      );
       
 } else {
   return (
    <nav >
    <span onClick={() => onRouteChange('signin')} className='login'> Sign in</span>
    <span onClick={() => onRouteChange('register')} className='login'> Sign up</span>
     </nav>
   );
 }
};

export default Navigation;
