import React from "@types/react";
import { SectionBlock } from "../slackBlockComponents/sectionBlock";

export class BlockResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedJason: props.parsedJason,
    };
  }

  render() {
    console.log('render', this.props.parsedJason);

    let blockList = [];
    if (!this.props.parsedJason) {
      return;
    }

    for (let blockIndex = 0; blockIndex < this.props.parsedJason.length; blockIndex++) {
      let blockDict = this.props.parsedJason[blockIndex];
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
}