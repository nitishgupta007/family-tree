import React, { useState } from "react";
import FamilyTree from "./components/FamilyTree";
import Relationships from "./components/Relationships";
import shanFamily from "./family-tree-data.json";
import RelationForm from "./components/RelationForm";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [response, setResponse] = useState([]);

  function handleName(value: string) {
    setName(value.toLowerCase());
  }

  function handleRelation(value: string) {
    setRelation(value.toUpperCase());
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
        <RelationForm 
        handleName={handleName} 
        handleRelation={handleRelation} 
        handleSearch={handleSearch} 
        name={name} 
        relation={relation}
        response={response}
        />
        <div className="App">
          <FamilyTree familyData={shanFamily} />
        </div>
      </div>
      
    </>
  );
};

export default App;
