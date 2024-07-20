import { PATH_DB } from '../contacts/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';

const removeLastContact = async () => {
  try {
    const data = await fs.readFile(path.resolve(PATH_DB), 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();

      await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(contacts, null, 2));

    } else {
      console.log('Масив порожній.');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact()

export { removeLastContact };
