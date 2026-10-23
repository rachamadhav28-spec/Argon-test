export function parseGeminiCodeBlocks(rawText) {
  const blocks = [];
  const regex = /```(\w+)?\n([\s\S]*?)```/g;
  let match;
  while ((match = regex.exec(rawText)) !== null) {
    blocks.push({ lang: match[1] || "txt", code: match[2] });
  }
  return blocks;
}
