const ALL_CHARACTERS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
export const generateRandomString = (length: number): string => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += ALL_CHARACTERS.charAt(Math.floor(Math.random() * ALL_CHARACTERS.length));
  }
  return result;
};