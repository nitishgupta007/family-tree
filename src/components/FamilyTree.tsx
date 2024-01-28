import React from 'react';

interface Person {
  name: string;
  gender: string;
  relationship: string;
  spouse?: string;
  children?: Person[];
}

interface FamilyTreeProps {
  familyData: Person;
}

const FamilyTree: React.FC<FamilyTreeProps> = ({ familyData }) => {
  const renderFamilyTree = (person: Person, index: number): JSX.Element => {
    return (
      <>
            <div className="node" key={index}>
              <div>
                <span className={`label ${person.gender.toLowerCase()}`}>
                  {person.name}
                </span>
                {person.spouse && <span className={`label ${person.gender.toLowerCase() === 'male' ? 'female' : 'male'}`}>{person.spouse}</span>}
              </div>
              {person.children && (
                <div className="children">
                  {person.children.map((child, index) => (
                    renderFamilyTree(child, index)
                  ))}
                </div>
              )}
            </div>
      </>
    );
  };

  return (
    <div>
      <h2>Shan Family Tree</h2>
      <article className="binary-tree">
        {renderFamilyTree(familyData, 0)}
      </article>
    </div>
  );
};

export default FamilyTree