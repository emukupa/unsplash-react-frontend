import React from 'react';

export default ({ image }) => {
  return (
    <div className="image-wrapper">
      <img className="single-image" src={image.urls.thumb} alt="" />
    </div>
  );
};
