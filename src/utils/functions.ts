export const getByteFromText = (byte: string): number => {
  return +byte.split('-').pop()!;
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const showElement = (element: HTMLElement): void => {
  element.style.display = 'block';
};

export const hideElement = (element: HTMLElement): void => {
  element.style.display = 'none';
};
