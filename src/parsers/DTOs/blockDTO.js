export class BlockDTO {
  constructor(blockDict) {
    this.type = blockDict.type;
    this.text = blockDict.text.text;
    this.block_id = blockDict.block_id;
    this.fields = blockDict.fields;
    this.accessory = blockDict.accessory;
  }
}