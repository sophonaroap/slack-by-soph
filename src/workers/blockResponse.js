import React from 'react';
import { SectionBlock } from "../slackBlockComponents/sectionBlock";
import { ContextBlock } from "../slackBlockComponents/contextBlock";

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

    let thisBlock;

    switch(blockObject['type']) {
      case 'context':
        thisBlock = < ContextBlock contextElements={ blockObject['elements'] } blockId={ blockObject.block_id }/>;
        break;

      default:
        thisBlock = < SectionBlock blockText={ blockObject.text.text } blockId={ blockObject.block_id }/>;
    }

    blockList.push(thisBlock);
  }

  const displayBlockList = blockList.map((block, index) => {
    return (
      <div className='block-response-block' key={ index }>
        { block }
      </div>
    );
  });

  return <>{ displayBlockList }</>;
}