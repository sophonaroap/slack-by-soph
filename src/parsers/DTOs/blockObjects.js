/**
 * Eventually this should have data validation
 * There should be a DTO for each type of block, and buildPayloadDTO should choose which to create
 */
export class Block {
  constructor(blockDict) {
    this.type = blockDict.type;
    this.text = blockDict.text.text;
    this.block_id = blockDict.block_id;
    this.fields = blockDict.fields;
    this.accessory = blockDict.accessory;
  }
}