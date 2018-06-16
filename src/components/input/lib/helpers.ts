export const compare = (a: string, b: string): boolean => {
  if (a !== '' && a === b) return true;
  return false;
}

export const regTest = (reg: any, value: string): boolean => reg.test(value);