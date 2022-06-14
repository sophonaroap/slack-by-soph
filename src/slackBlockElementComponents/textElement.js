import React from 'react';
import { convertStringWithEmoji } from 'parsers/emoji';

export function TextElement(props) {
  let elementKey = props.elementKey;
  let elementText = props.elementText;

  let textWithEmoji = convertStringWithEmoji(elementText);

  return (
      <div className="text-element" key={ elementKey }>{ textWithEmoji }</div>
  );
}