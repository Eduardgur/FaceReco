import React from 'react';
import ImageUrlForm from '../../components/ImageUrlForm/ImageUrlForm'
import Rank from '../../components/Rank/Rank'
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition'


const ImageEngine = (props) => {
const { onInputChange, onButtonSubmit, image, boxs, user } = props;
  return (
    <div>
      <Rank user={ user } />
      <ImageUrlForm onInputChange={ onInputChange } onButtonSubmit={ onButtonSubmit } />
      <FaceRecognition image={ image } boxs={ boxs }/>
    </div>
  );

}

export default ImageEngine;
