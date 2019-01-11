export const isBoolean = (val: any) => {
  return typeof val === 'boolean' || val === 'true' || val === 'false';
};

export const isId = (val: string) => {
  return (
    (typeof val === 'string' || typeof val === 'number') &&
    /[a-zA-Z0-9_.:-]+/g.test(val)
  );
};

export const isNumberOfString = (val: string) => {
  return /^-?[0-9]+$/.test(val);
};
