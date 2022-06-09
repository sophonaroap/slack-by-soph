import React from 'react';
import { SectionBlock } from "../slackBlockComponents/sectionBlock";

/**
 * Loop through each Block from user input, and return the full html of all blocks in response
 * @param props - parsedPayload -> Array[Block]
 */
export function BlockResponse(props) {
  const parsedPayload = props.parsedPayload;
  if (!parsedPayload) return;

  let blockList = [];

  for (let blockKey in parsedPayload) {
    let blockObject = parsedPayload[blockKey];
    console.log('blockObject', blockObject);

    let thisBlock = < SectionBlock blockText={ blockObject.text } blockId={ blockObject.block_id }/>;

    blockList.push(thisBlock);
  }

  const displayBlockList = blockList.map((block, index) => {
    return (
      <div key={ index }>
        { block }
      </div>
    );
  });

  return <>{ displayBlockList }</>;
}