import React from 'react';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import ImageUrlForm from '../../components/ImageUrlForm/ImageUrlForm';
import Rank from '../../components/Rank/Rank';

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
