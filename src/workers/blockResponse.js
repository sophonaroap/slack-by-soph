import React from "@types/react";
import { SectionBlock } from "../slackBlockComponents/sectionBlock";

export function BlockResponse(props) {
  console.log('render', props.parsedJason);

  let blockList = [];
  if (!props.parsedJason) {
    return;
  }

  for (let blockIndex = 0; blockIndex < props.parsedJason.length; blockIndex++) {
    let blockDict = props.parsedJason[blockIndex];
    console.log('blockDict', blockDict);

    let thisBlock = < SectionBlock blockText={ blockDict['text']['text'] } blockId={ blockDict['block_id'] }/>;

    blockList.push(thisBlock);
  }

  const displayBlockList = blockList.map((block, index) => {
    return (
      <div key={ index }>
        { block }
      </div>
    );
  });

  return (
    <>
      { displayBlockList }
    </>
  );
}