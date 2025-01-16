import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  return await readContacts();
};

console.log(await countContacts());
