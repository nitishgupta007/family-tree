import shanFamily from "../family-tree-data.json";
import Relationships from "../components/Relationships";

describe("FamilyTree", () => {
  let family: any;
  beforeEach(() => (family = shanFamily));

  describe("Problem 1: Meet the family", () => {
    describe("Give a name and a relationship as an input, the output are the person that correspond to the relationship.", () => {
      describe.each`
        name            | relationship        | output
        ${"drita"}      | ${"PATERNAL UNCLE"} | ${["ish", "vich", "vyan"]}
        ${"chika"}      | ${"PATERNAL UNCLE"} | ${["ish", "chit", "vyan"]}
        ${"satvy"}      | ${"PATERNAL UNCLE"} | ${[]}
        ${"savya"}      | ${"MATERNAL UNCLE"} | ${["ish", "chit", "vich"]}
        ${"lavnya"}     | ${"MATERNAL UNCLE"} | ${[]}
        ${"vrita"}      | ${"MATERNAL UNCLE"} | ${[]}
        ${"driya"}      | ${"MATERNAL UNCLE"} | ${[]}
        ${"drita"}      | ${"PATERNAL AUNT"}  | ${["lika", "satya"]}
        ${"driya"}      | ${"PATERNAL AUNT"}  | ${[]}
        ${"lavnya"}     | ${"PATERNAL AUNT"}  | ${["chika"]}
        ${"kriya"}      | ${"PATERNAL AUNT"}  | ${["satvy", "mina"]}
        ${"satvy"}      | ${"MATERNAL AUNT"}  | ${["ambi", "lika"]}
        ${"ish"}        | ${"SISTER IN LAW"}  | ${["ambi", "lika"]}
        ${"ambi"}       | ${"SISTER IN LAW"}  | ${["satya"]}
        ${"krpi"}       | ${"SISTER IN LAW"}  | ${["satvy"]}
        ${"vyan"}       | ${"BROTHER IN LAW"} | ${["ish", "chit", "vich"]}
        ${"kpila"}      | ${"BROTHER IN LAW"} | ${["vila"]}
        ${"mnu"}        | ${"BROTHER IN LAW"} | ${["jata"]}
        ${"vich"}       | ${"BROTHER IN LAW"} | ${["vyan"]}
        ${"vila"}       | ${"BROTHER IN LAW"} | ${["kpila"]}
        ${"saayan"}     | ${"BROTHER IN LAW"} | ${["asva"]}
        ${"drita"}      | ${"COUSINS"}        | ${["vila", "chika", "satvy", "savya", "saayan"]}
        ${"saayan"}     | ${"COUSINS"}        | ${["drita", "vrita", "vila", "chika"]}
        ${"misa"}       | ${"COUSINS"}        | ${["kriya"]}
        ${"king shan"}  | ${"FATHER"}         | ${null}
        ${"chit"}       | ${"FATHER"}         | ${"king shan"}
        ${"drita"}      | ${"FATHER"}         | ${"chit"}
        ${"jata"}       | ${"FATHER"}         | ${"drita"}
        ${"queen anga"} | ${"MOTHER"}         | ${null}
        ${"satya"}      | ${"MOTHER"}         | ${"queen anga"}
        ${"saayan"}     | ${"MOTHER"}         | ${"satya"}
        ${"misa"}       | ${"MOTHER"}         | ${"mina"}
        ${"king shan"}  | ${"CHILDREN"}       | ${["ish", "chit", "vich", "satya"]}
        ${"satya"}      | ${"CHILDREN"}       | ${["satvy", "savya", "saayan"]}
        ${"jaya"}       | ${"CHILDREN"}       | ${["jata", "driya"]}
        ${"ish"}        | ${"CHILDREN"}       | ${[]}
        ${"misa"}       | ${"CHILDREN"}       | ${[]}
        ${"king shan"}  | ${"SON"}            | ${["ish", "chit", "vich"]}
        ${"satya"}      | ${"SON"}            | ${["savya", "saayan"]}
        ${"lavnya"}     | ${"SON"}            | ${[]}
        ${"queen anga"} | ${"DAUGHTER"}       | ${["satya"]}
        ${"jaya"}       | ${"DAUGHTER"}       | ${["driya"]}
        ${"jnki"}       | ${"DAUGHTER"}       | ${["lavnya"]}
        ${"satya"}      | ${"BROTHER"}        | ${["ish", "chit", "vich"]}
        ${"kriya"}      | ${"BROTHER"}        | ${[]}
        ${"saayan"}     | ${"BROTHER"}        | ${["savya"]}
        ${"ish"}        | ${"SISTER"}         | ${["satya"]}
        ${"jata"}       | ${"SISTER"}         | ${["driya"]}
        ${"kriya"}      | ${"SISTER"}         | ${[]}
        ${"queen anga"} | ${"GRAND DAUGHTER"}  | ${["chika", "satvy"]}
        ${"ambi"}       | ${"GRAND DAUGHTER"}  | ${["driya"]}
        ${"vich"}       | ${"GRAND DAUGHTER"}  | ${["lavnya"]}
        ${"satya"}      | ${"GRAND DAUGHTER"}  | ${[]}
      `("$relationship", ({ name, relationship, output }) => {
        it(`${name}'s ${relationship}: ${output}`, () => {
          const result: any = Relationships(family, name, relationship);
          expect(result).toEqual(output);
        });
      });
    });
  });
});
