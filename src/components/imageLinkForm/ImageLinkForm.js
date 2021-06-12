import React from 'react'
import '../imageLinkForm/ImageLinkForm.css'
import { Button } from '@material-ui/core';
import InputForm from "./InputForm"


const  ImageLinkForm = ({onInputChange, onButtonSubmit }) => {
    return (
        <div className='image-block'>
            <p className="sub-title"> 
                {'This Alien will detect faces in your pictures! '}
            </p>
            <div className='input-block'>
                
            <div className='input-block-2'>
            <InputForm onChange={onInputChange} />
            <Button onClick={onButtonSubmit} style={{margin:'10px'}} variant="contained" color="primary">Detect</Button>

            </div>
                
            </div>
        </div>
    )
}

export default  ImageLinkForm;
