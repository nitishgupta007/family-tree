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
    <div >
      <div className="displayFlex">
      <div className="relationForm">
        <h5>Vaild Input Relationship</h5>
        <div className="noteBlock">
        <p>PATERNAL UNCLE</p> 
          <p>MATERNAL UNCLE</p>      
          <p>PATERNAL AUNT</p> 
          <p>MATERNAL AUNT</p> 
          <p>SISTER IN LAW</p>      
          <p>BROTHER IN LAW</p>
          <p>COUSINS</p>      
          <p>FATHER</p>  
          <p>MOTHER</p> 
          <p>CHILDREN</p> 
          <p>SON</p> 
          <p>DAUGHTER</p> 
          <p>BROTHER</p> 
          <p>SISTER</p> 
          <p>GRAND DAUGHTER</p>
        </div> 
      </div>
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
              <strong>{response.toString().length ? response.toString() : `${name} does't not have ${relation}`}</strong>
            </>
          ) : (
            ""
          )}
          </div>
          <div style={{width:'150px'}}></div>
        </div>
        
        
    </div>
  );
};

export default RelationForm;