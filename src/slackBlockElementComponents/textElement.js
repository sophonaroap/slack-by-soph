import React from 'react';
import { convertStringWithEmoji } from 'parsers/emoji';

export function TextElement(props) {
  let elementText = props.elementText;
  let isMarkdown = props.isMarkdown;

  if (isMarkdown) {

  }

  let textWithEmoji = convertStringWithEmoji(elementText);

  return (
      <div className="text-element">{ textWithEmoji }</div>
  );
}