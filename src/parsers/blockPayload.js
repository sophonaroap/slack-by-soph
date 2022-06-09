import { BlockDTO } from "./DTOs/blockDTO";

export function BuildPayloadDTO(parsedJason) {
  let blockDTOArray = []

  for (let blockIndex = 0; blockIndex < parsedJason.length; blockIndex++) {
    let blockDict = parsedJason[blockIndex];
    console.log('blockDict', blockDict, 'blockId', blockIndex);

    const thisBlock = new BlockDTO(blockDict);
    blockDTOArray.push(thisBlock);
  }

  return blockDTOArray;
}