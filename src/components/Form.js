//leting this file know that we are using react


//making components
const Form = ({inputdata ,setinputData , todos,setodos, setstatus})=> {
  

const inputHandler = (e) =>{
  
  setinputData(e.target.value);
};

const submitToDoHandler= (e) =>{
  e.preventDefault();
  setinputData(e.target.value);

  console.log("inputdata",inputdata)

 if (!inputdata || inputdata.trim() === "") return;

  setodos([...
    todos,
    {text :inputdata, completed: false , id:Math.random()*100},
  ]);
    setinputData("");
};

const statusHandler= (e) =>{
setstatus(e.target.value);

};

    return(

    <form onSubmit={submitToDoHandler}>
      <input value={inputdata}   onChange={inputHandler} type="text" className="todo-input" />

      <button  className="todo-button" type="submit">

        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}
// hooking this on app.js
export default Form;