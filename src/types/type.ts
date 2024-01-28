export interface Person {
  name: string;
  gender: string;
  relationship: string;
  spouse?: string;
  children?: Person[];
}
