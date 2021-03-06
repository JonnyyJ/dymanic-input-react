import React,{ useState } from "react";
function App() {
  const [inputList, setInputList] = useState([{
    firstName: "",
    lastName: ""
  }])
  const handleInputChange = (e, index) =>{
    const {name, value} = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list)
  }
  const handleAddClick = ()=>{
    setInputList([...inputList, { firstName: "", lastName: ""}])
  }
  return (
    <div className="App">
       <div>
       { 
        inputList.map((x, i)=>{
          return(
            <div className="box" data-testid="container">
              <input
               name = "firstName"
               value = {x.firstName}
               onChange={ e => handleInputChange(e, i)}
              />
              <input
               className="ml10"
               name = "lastName"
               value = {x.lastName}
               onChange={ e => handleInputChange(e, i)}
              />
              <div>
                {inputList.length !== 1 && <button
                data-testid="btn-remove"
                className="mr10"
                onClick={ ()=> handleRemoveClick(i)}
                >Remove</button>}
                {inputList.length - 1 === i && 
                <button 
                data-testid="btn-add"
                onClick={handleAddClick}>Add</button>}
              </div>
            </div>
          )
          
        })
      }
      </div>
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default App;
