import React, { useState } from "react";
import FamilyTree from "./components/FamilyTree";
import Relationships from "./components/Relationships";
import shanFamily from "./family-tree-data.json";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [response, setResponse] = useState([]);

  function handleName(value: string) {
    setName(value);
  }

  function handleRelation(value: string) {
    setRelation(value);
  }

  function handleSearch() {
    try {
      const response = Relationships(shanFamily, name, relation);
      if (response) {
        setResponse(response as any);
      }
    } catch (e: any) {
      window.alert("Error, Please insert correct input and retry.");
    }
  }

  return (
    <>
      <div className="App">
        <h2>RelationShip</h2>
        <label>Name: </label>
        <input
          id="name"
          value={name}
          onChange={(e) => handleName(e.target.value)}
        ></input>
        <div>
          <label>Relationship: </label>
          <input
            id="relation"
            value={relation}
            onChange={(e) => handleRelation(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="button" onClick={() => handleSearch()}>
            Search
          </button>
        </div>
        {response ? (
          <div>
            <h2>{relation}</h2>
            <div>{response.toString()}</div>
          </div>
        ) : (
          ""
        )}
        <hr />
        <FamilyTree familyData={shanFamily} />
      </div>
    </>
  );
};

export default App;
