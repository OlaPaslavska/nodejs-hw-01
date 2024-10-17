import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

//приймає параметр number, що вказує кількість нових контактів для генерування

async function generateContacts(number) {
  //зчитуються всі існуючі контакти

  const contacts = await readContacts();

  //Створення нових контактів і додавання їх до масиву

  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  //Записуються нові контакти до вже існуючих
  await writeContacts(contacts);
}
generateContacts(5);
