import React from 'react';
import { Person } from '../types/type';

interface FamilyTreeProps {
  familyData: Person;
}

const FamilyTree: React.FC<FamilyTreeProps> = ({ familyData }) => {
  const renderFamilyTree = (person: Person, index: number): JSX.Element => {
    return (
          <div key={index}>
            <div className="node">
              <span className="label">
                <strong className={`label ${person.gender.toLowerCase()}`}>
                {person.name}
              </strong>
                {person.spouse && <strong className={`label ${person.gender === 'Male' ? 'female' : 'male'}`}>{person.spouse}</strong>}
              </span>
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