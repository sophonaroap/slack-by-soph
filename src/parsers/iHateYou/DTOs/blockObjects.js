export class SectionBlock {
  constructor(blockDict) {
    this.type = 'section';
    this.text = blockDict.text.text;
    this.block_id = blockDict.block_id;
    this.fields = blockDict.fields;
    this.accessory = blockDict.accessory;
  }
}

export class ContextBlock {
  constructor(blockDict) {
    this.type = 'context';
    this.elements = blockDict['elements'];
    this.block_id = blockDict.block_id;
  }
}