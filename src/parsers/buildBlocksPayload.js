import { SectionBlock } from "./iHateYou/DTOs/blockObjects";

/**
 * @param parsedJason > JSON.parse(userInput)
 * @returns Array[SectionBlock]
 */
export function buildBlocksPayload(parsedJason) {
  let blockDTOArray = []

  for (let blockKey in parsedJason) {
    let blockDict = parsedJason[blockKey];

    let thisBlock = new SectionBlock(blockDict);
    blockDTOArray.push(thisBlock);
  }

  return blockDTOArray;
}