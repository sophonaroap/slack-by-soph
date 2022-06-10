import React from 'react';

export function SectionBlock(props) {
  let blockText = props.blockText;
  let blockId = props.blockId;

  return (
    <div className='section-block' id={ blockId }>{ blockText }</div>
  );
}
