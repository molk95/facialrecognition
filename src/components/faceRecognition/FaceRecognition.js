import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="image-box ma" >
            <div className="absolute mt2" >
            <img alt='' id='inputimage' src={imageUrl} width='500px' height='auto' />
            <div style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} className='bonding-box'>

            </div>
            </div>
            
        </div>
    );
}

export default FaceRecognition;
