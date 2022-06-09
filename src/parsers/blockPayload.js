import { BlockDTO } from "./DTOs/blockDTO";

export function buildPayloadDTO(parsedJason) {
  let blockDTOArray = []

  for (let blockKey in parsedJason) {
    let blockDict = parsedJason[blockKey];

    let thisBlock = new BlockDTO(blockDict);
    blockDTOArray.push(thisBlock);
  }

  return blockDTOArray;
}