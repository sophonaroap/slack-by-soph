import EmojiConvertor from "emoji-js";

/**
 * Emojis will only render in one of two situations:
 * plain_text text object with emoji = true and :<emoji>:
 * markdown text object with :<emoji>:
 */
export function convertStringWithEmoji(emojiString) {
  let emoji = new EmojiConvertor();

  return emoji.replace_colons(emojiString);
}