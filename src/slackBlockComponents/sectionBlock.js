import React from "@types/react";

export function SectionBlock(props) {
  let blockText = props.blockText;
  let blockId = props.blockId;

  return (
    <div id={ blockId }>{ blockText }</div>
  );
}
