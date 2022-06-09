import React from "react";

/*
Slack Markdown:
- Escaping text
  - Replace the ampersand, &, with &amp;
  - Replace the less-than sign, < with &lt;
  - Replace the greater-than sign, > with &gt;

- Basics
  - _italic_  :  <i>
  - *bold*  :  <b>
  - ~strike~  :  <del>

- Blocks of Text
  - >This is quoted text.\n>Can do on one or more lines  :  <blockquote>
  - Code blocks
    - `inline code`  :  <code>
    - ```This is a code block\nAnd it is multi-line```  :  <pre><code>
  - List
    - "- List item 1\n- List item 2\n- List item 3"  :  <ul><li>
    - "* List item 1\n* List item 2\n* List item 3"  :  <ul><li>
    - "1. List item 1\n2. List item 2\n3. List item 3"  :  <ol><li>

- Links
  - This message contains a URL http://example.com/
  - So does this one: www.example.com
  - This message contains a URL <http://example.com/>
  - <http://www.example.com|This message *is* a link>
  - <mailto:bob@example.com|Email Bob Roberts>

  - <a href="url">link text</a>

*/

/*
bold:         .*[*]\S.*[*].*
italic:       .*[_]\S.*[_].*
strike:       .*[~]\S.*[~].*
inline code:  .*[`]\S.*[`].*
code block:   .*`{3}\S.*`{3}.*
*/

export function parseMarkdown(markdownText) {
  let boldRe = /.*[*](\S.*)[*].*/gim;
  console.log(markdownText)

  let htmlText = markdownText.replace(boldRe, '<b>$1</b>').trim()

  return <div dangerouslySetInnerHTML={{__html: htmlText}} />;
}
