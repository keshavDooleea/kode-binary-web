export const getByteFromText = (byte: string): number => {
  return +byte.split('-').pop()!;
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
