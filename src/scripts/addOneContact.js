import { PATH_DB } from '../contacts/contacts.js';
import { promises as fs } from 'fs';
import path from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const data = await fs.readFile(path.resolve(PATH_DB), 'utf-8');
    const contacts = JSON.parse(data);

    const newContact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(contacts, null, 2));

  } catch (error) {
    console.error(error);
  }
};

addOneContact();
