import { Block } from "./DTOs/blockObjects";

/**
 * @param parsedJason > JSON.parse(userInput)
 * @returns Array[Block]
 */
export function buildBlocksPayload(parsedJason) {
  let blockDTOArray = []

  for (let blockKey in parsedJason) {
    let blockDict = parsedJason[blockKey];

    let thisBlock = new Block(blockDict);
    blockDTOArray.push(thisBlock);
  }

  return blockDTOArray;
}