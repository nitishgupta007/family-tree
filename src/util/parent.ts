import { Person } from "../types/type";

const findParent = (
  childName: string,
  familyData: Person
): Person | undefined => {
  const searchInFamily = (person: Person): Person | undefined => {
    if (person.children) {
      for (const child of person.children) {
        if (child.name === childName || child.spouse === childName) {
          return person; // Found the parent
        } else {
          const foundPerson = searchInFamily(child);
          if (foundPerson) {
            return foundPerson;
          }
        }
      }
    }
    return undefined;
  };

  return searchInFamily(familyData);
};
export default findParent;
