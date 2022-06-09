import React from 'react';
import { SectionBlock } from "../slackBlockComponents/sectionBlock";

export function BlockResponse(props) {
  const parsedPayload = props.parsedPayload
  if (!parsedPayload) return;

  let blockList = [];

  for (let blockIndex = 0; blockIndex < parsedPayload.length; blockIndex++) {
    let blockDTO = parsedPayload[blockIndex];
    console.log('blockDTO', blockDTO);

    let thisBlock = < SectionBlock blockText={ blockDTO.text } blockId={ blockDTO.block_id }/>;

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