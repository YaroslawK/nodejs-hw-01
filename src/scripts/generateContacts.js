import { PATH_DB } from '../contacts/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(path.resolve(PATH_DB), 'utf-8');
      const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(contacts, null, 2));

  } catch (error) {
    console.error(error);
  }
};

generateContacts(3);
