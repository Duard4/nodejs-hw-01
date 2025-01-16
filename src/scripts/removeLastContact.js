import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  writeContacts((await readContacts()).slice(0, -1));
};

removeLastContact();
