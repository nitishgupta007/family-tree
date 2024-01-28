import React from 'react';
interface RelationFormProps {
    handleName: Function,
    handleRelation: Function,
    handleSearch: Function,
    name: string,
    relation: string,
    response: Array<string>
}

const RelationForm: React.FC<RelationFormProps> = ({ handleName, handleRelation, handleSearch, name, relation, response }) => {

  return (
    <div className="relationForm">
      <h2>RelationShip</h2>
        <label className="formLabel" htmlFor="name">Name</label>
        <div>
            <input
            id="name"
            value={name}
            onChange={(e) => handleName(e.target.value)}
            ></input>
        </div>
        <div>
          <label className="formLabel" htmlFor="relation">Relationship</label>
            <div>
                <input
                    id="relation"
                    value={relation}
                    onChange={(e) => handleRelation(e.target.value)}
                ></input>
            </div>
        </div>
        <div>
          <button type="button" onClick={() => handleSearch()}>
            Search
          </button>
        </div>
        {response ? (
          <>
            <h4 className='formLabel'>{relation}</h4>
            <strong>{response.toString()}</strong>
          </>
        ) : (
          ""
        )}
    </div>
  );
};

export default RelationForm;