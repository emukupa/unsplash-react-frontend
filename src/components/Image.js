import React from 'react';
import './Image.css';
export default ({ image }) => {
  return (
    <div className="Image-wrapper">
      <img className="single-image" src={image.urls.small} alt="" />
    </div>
  );
};
