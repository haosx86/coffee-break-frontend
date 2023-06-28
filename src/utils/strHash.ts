export const strHash = (str: string): number => {
  if (!str) return 0;
  const chars = Array.from(str)
  return chars.reduce((acc, currentChar) => acc + currentChar.charCodeAt(0) % str.length, 0)
}
