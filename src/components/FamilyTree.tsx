import React from 'react';
import { Person } from '../types/type';

interface FamilyTreeProps {
  familyData: Person;
}

const FamilyTree: React.FC<FamilyTreeProps> = ({ familyData }) => {
  const renderFamilyTree = (person: Person, index: number): JSX.Element => {
    return (
          <div className="node" key={index}>
            <div>
              <span className={`label ${person.gender.toLowerCase()}`}>
                {person.name}
              </span>
              {person.spouse && <span className={`label ${person.gender === 'Male' ? 'female' : 'male'}`}>{person.spouse}</span>}
            </div>
            {person.children && (
              <div className="children">
                {person.children.map((child, index) => (
                  renderFamilyTree(child, index)
                ))}
              </div>
            )}
          </div>
    );
  };

  return (
    <>
      <h2>Shan Family Tree</h2>
      {renderFamilyTree(familyData, 0)}
    </>
  );
};

export default FamilyTree