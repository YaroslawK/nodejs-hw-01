import { error } from 'console';
import { PATH_DB } from '../contacts/contacts.js';
import { promises as fs } from 'fs';
import path, { resolve } from 'path';

const getAllContacts = async () => {
  try {
    const data = await fs.readFile(path.resolve(PATH_DB), 'utf-8');
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.error(error);
  }
};

getAllContacts()
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

export { getAllContacts };
