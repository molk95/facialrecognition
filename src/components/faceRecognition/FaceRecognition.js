import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="image-box" >
            <img alt='' src={imageUrl} />
        </div>
    );
}

export default FaceRecognition;
