import React from 'react';

export function ImageElement(props) {
  let elementKey = props.elementKey;
  let imageAltText = props.imageAltText;
  let imageUrl = props.imageUrl;

  let thisInlineStyle = {
    backgroundImage: 'url(' + imageUrl + ')',
  };

  return (
      <div className='img-element' key={ elementKey } role='img' title={imageAltText} style={thisInlineStyle}/>
  );
}