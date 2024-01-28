import { Person } from "../types/type";
import findPersonByName from "../util/person";
import findParent from "../util/parent";
import siblingsParent from '../util/siblingsParent';
const Relationships = (familyData: Person, name: string, relation: string) => {
  let gender: string =
    relation === "BROTHER" ||
    relation === "SON" ||
    relation === "FATHER" ||
    relation === "PATERNAL UNCLE" ||
    relation === "PATERNAL AUNT" ||
    relation === "BROTHER IN LAW"
      ? "Male"
      : "Female";
  let identifier: string;

  const isRoot = name === "king shan" || name === "queen anga";

  const findRelations = (name: string, familyData: Person): Person[] => {
    const person = findPersonByName(name, familyData);

    if (!person) {
      return [];
    }

    const parent = isRoot ? person : findParent(name, familyData);

    if (!parent || !parent.children) {
      // let check: Array<Person> | void = person?.relationship === "Spouse" ? familyData : undefined;
      return [];
    }

    if (relation === "PATERNAL UNCLE" || relation === "PATERNAL AUNT") {
      const siblings = findParent(parent.name, familyData);
      let uncle: Array<Person> = siblingsParent(siblings, parent);
      return parent?.gender === gender ? uncle : [];
    }

    if (relation === "MATERNAL UNCLE" || relation === "MATERNAL AUNT") {
      const siblings = findParent(parent.name, familyData);
      let uncle: Array<Person> = siblingsParent(siblings, parent);
      return parent?.gender === "Female" ? uncle : [];
    }

    if (relation === "COUSINS") {
      const cousins: Person[] = [];
      const siblings = findParent(parent.name, familyData);
      let uncle: Array<Person> = siblingsParent(siblings, parent);
      uncle?.forEach((item: Person) => {
        if (item.children && Array.isArray(item.children)) {
          cousins.push(...item.children);
        }
      });
      return cousins;
    }

    if (relation === "GRAND DAUGHTER") {
      let grandDaughter: Array<Person> = [];
      person?.children?.forEach((item: Person) => {
        if (item?.children) {
          grandDaughter?.push(...item.children);
        }
      });
      
      return grandDaughter;
    }

    if (relation === "SISTER IN LAW" || relation === "BROTHER IN LAW") {
      identifier = person?.name === name ? "name" : "spouse";
      const siblings =
        parent?.children?.filter(
          (child: Person) =>
            child.relationship === "Child" &&
            child.name !== name &&
            child.spouse !== name
        ) || [];

      return siblings;
    }

    if (relation === "BROTHER" || relation === "SISTER") {
      return (
        parent?.children?.filter(
          (child: Person) =>
            child.relationship === "Child" &&
            child.name !== name &&
            child.gender === gender
        ) || []
      );
    } else if (relation === "FATHER" || relation === "MOTHER") {
      let result = isRoot ? null
          : parent?.gender === gender
          ? parent.name
          : (parent?.spouse as Person | any);
      return result;
    } else if (relation === "CHILDREN") {
      let childs: Person | void;
      isRoot
        ? (childs = parent)
        : (childs = parent?.children?.find(
            (child: Person) => child.name === name || child.spouse === name
          ));
      return childs?.children || [];
    } else if (relation === "SON" || relation === "DAUGHTER") {
      let childs: Person | void;
      isRoot
        ? (childs = parent)
        : (childs = parent?.children?.find(
            (child: Person) => child.name === name || child.spouse === name
          ));
      return childs?.children
        ? childs?.children.filter((child: Person) => child.gender === gender)
        : [];
    } else {
      return [];
    }
  };

  const PersonRelation = findRelations(name, familyData);

  const renderPeople = (people: Person[], relation: string): JSX.Element[] => {
    let output: any = [];
    let primary: any = [];

    switch (relation) {
      case "FATHER":
      case "MOTHER":
        return people as any;
      case "CHILDREN":
      case "SON":
      case "DAUGHTER":
      case "BROTHER":
      case "COUSINS":
      case "SISTER":
        output = people?.map((person: Person) => person.name);
        return output;

      case "PATERNAL UNCLE":
      case "MATERNAL UNCLE":
        primary = people?.map((person: Person) =>
          person?.gender === "Male" ? person?.name : person?.spouse
        );
        output = primary?.filter(Boolean);
        return output;

      case "PATERNAL AUNT":
      case "MATERNAL AUNT":
        primary = people?.map((person: Person) =>
          person?.gender === "Female" ? person?.name : person?.spouse
        );
        output = primary?.filter(Boolean);
        return output;

      case "SISTER IN LAW":
        primary =
          identifier === "name"
            ? people?.map((person: Person) =>
                person.gender === "Male" ? person.spouse : ""
              )
            : people?.map((person: Person) =>
                person.gender === "Female" ? person.name : ""
              );
        output = primary?.filter(Boolean);
        return output;

      case "BROTHER IN LAW":
        primary =
          identifier === "name"
            ? people?.map((person: Person) =>
                person.gender === "Female" ? person.spouse : ""
              )
            : people?.map((person: Person) =>
                person.gender === "Male" ? person.name : ""
              );
        output = primary?.filter(Boolean);
        return output;

      case "GRAND DAUGHTER":
        primary = people?.map((person: Person) =>
          person?.gender === "Female" ? person.name : ""
        );
        output = primary?.filter(Boolean);
        return output;

      default:
        throw new Error("Relationship not supported");
    }
  };

  return renderPeople(PersonRelation, relation);
};

export default Relationships;
