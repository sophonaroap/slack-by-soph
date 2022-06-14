import React from 'react';

export function ContextBlock(props) {
  let contextElements = props.contextElements;
  let blockId = props.blockId;

  let renderedElements = []

  for (let elementIndex = 0; elementIndex < contextElements.length; elementIndex++) {
    let thisElement = contextElements[elementIndex]

    if (thisElement['type'] === 'image') {
      let thisInlineStyle = {
        backgroundImage: 'url(' + thisElement.image_url + ')',
      };
      renderedElements.push(<div className='context-block-img' key={ elementIndex } role='img' title={thisElement.alt_text} style={thisInlineStyle}/>);
    }
    else {
      renderedElements.push(<div className='context-block-text' key={ elementIndex }>{ thisElement.text }</div>);
    }
  }

  return (
    <div className='context-block' id={ blockId }>{ renderedElements }</div>
  );
}