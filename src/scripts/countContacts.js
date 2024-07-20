import { PATH_DB } from '../contacts/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';

const countContacts = async () => {
  try {
    const data = await fs.readFile(path.resolve(PATH_DB), 'utf-8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error(error);
  }
};

countContacts()

export { countContacts };
