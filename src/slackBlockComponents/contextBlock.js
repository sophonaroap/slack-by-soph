import React from 'react';
import { ImageElement } from 'slackBlockElementComponents/imageElement';
import { TextElement } from 'slackBlockElementComponents/textElement';

export function ContextBlock(props) {
  let contextElements = props.contextElements;
  let blockId = props.blockId;

  let renderedElements = []

  for (let elementIndex = 0; elementIndex < contextElements.length; elementIndex++) {
    let thisElement = contextElements[elementIndex]

    if (thisElement['type'] === 'image') {
      renderedElements.push(<ImageElement elementKey={ elementIndex }
                                          imageAltText={ thisElement.alt_text }
                                          imageUrl={ thisElement.image_url }/>);
    }
    else {
      renderedElements.push(<TextElement elementKey={ elementIndex }
                                         elementText={ thisElement.text }/>);
    }
  }

  return (
    <div className='context-block' id={ blockId }>{ renderedElements }</div>
  );
}