import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  await writeContacts(
    (
      await readContacts()
    ).concat(Array.from({ length: number }, createFakeContact)),
  );
};

generateContacts(5);
