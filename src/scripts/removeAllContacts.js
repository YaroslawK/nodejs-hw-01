import { PATH_DB } from '../contacts/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';

const removeAllContacts = async () => {
  try {
    const emptyContacts = [];

    await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(emptyContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();

export { removeAllContacts };
