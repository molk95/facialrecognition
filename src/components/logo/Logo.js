import React from 'react';
import Tilt from 'react-tilt'
import '../logo/Logo.css'

 const Logo = () => {
    return (
        <div className='logo'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 👽 </div>
             </Tilt>
        </div>
    )
}
export default Logo;
