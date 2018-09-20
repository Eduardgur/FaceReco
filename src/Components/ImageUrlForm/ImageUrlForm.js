import React from 'react'
import './ImageUrlForm.css'

const ImageUrlForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className=' f3'>
        {`Try this magic to detect faces`}
      </p>

      <div className='flex justify-center'>
        <div className='flex justify-center h-75 w-75 mw9 pa2 br4 shadow-1'>
        <input className='url w-80 br3 mr2 shadow-5' type='text' placeholder='Copy image URL here' onChange={ onInputChange }/>
        <button className='detectBtn w-third mw5 h-75 grow f5 ph3 pv2 br3 shadow-5' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}
export default ImageUrlForm;
