export const getByteFromText = (byte: string): number => {
  return +byte.split('-').pop()!;
};
