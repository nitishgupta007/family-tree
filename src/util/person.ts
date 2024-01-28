import { Person } from "../types/type";

const findPersonByName = (name: string, person: Person): Person | undefined => {
  if (person.name === name || person.spouse === name) {
    return person;
  } else if (person.children) {
    for (const child of person.children) {
      const foundPerson = findPersonByName(name, child);
      if (foundPerson) {
        return foundPerson;
      }
    }
  }
  return undefined;
};

export default findPersonByName;
