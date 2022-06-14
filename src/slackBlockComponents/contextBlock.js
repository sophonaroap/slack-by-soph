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
      renderedElements.push(<ImageElement key={ elementIndex }
                                          imageAltText={ thisElement.alt_text }
                                          imageUrl={ thisElement.image_url }/>);
    }
    else {
      renderedElements.push(<TextElement key={ elementIndex }
                                         elementText={ thisElement.text }
                                         isMarkdown={thisElement['type'] === 'mrkdwn'}/>);
    }
  }

  return (
    <div className='context-block' id={ blockId }>{ renderedElements }</div>
  );
}