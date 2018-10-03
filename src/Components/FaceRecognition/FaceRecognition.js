import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ image, boxs }) => {
  return (
    <div className='center ma2'>
      <div className='absolute mt2 gradient-background shadow-1'>
        <img id='inputimage' className='shadow-1' src={ image } width='600px' height='auto' />
        {
          boxs.map(box => {
            return (
              <div key='box.key' className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FaceRecognition;