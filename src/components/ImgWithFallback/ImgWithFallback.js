import React from 'react';

const ImgWithFallback = ({
  src,
  alt,
  fallbackSrc,
  mediaType = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={mediaType} />
      <img src={fallbackSrc} alt={alt} {...delegated} />
    </picture>
  );
};

export default ImgWithFallback;
