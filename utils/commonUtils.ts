export const truncateText = (text: string, returnTextLength: number = 14) =>
  text.length > returnTextLength
    ? text.slice(0, returnTextLength) + "..."
    : text;
