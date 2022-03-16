import React/*importing something specific from react library */ , {useState ,useEffect}from 'react'; 
import './App.css';
//importing components
import Form from './components/Form';


import ToDoList from './components/ToDoList';

function App() {
const [inputdata, setinputData]=useState("");
const [todos,setodos]= useState([]);
const [status,setstatus]=useState("all");
const [filteredTodo,setFilterTodo]=useState([]);


useEffect(() => {
  getLocalTodos();
}, []);

useEffect(()=> {
 filterTodo();
 saveLocalTodos();
}, [todos, status ] );

const filterTodo = () =>{
  switch(status){
    case "completed":
      setFilterTodo(todos.filter((todo) =>todo.completed==true));
      break;

      case "uncompleted":
      setFilterTodo(todos.filter((todo) =>todo.completed==false));
      break;

      default:
        setFilterTodo(todos); 
  }
};

//save to local

const saveLocalTodos= () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// getting data
const getLocalTodos= () => {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos",JSON.stringify([]));
  }

  else{
    let todoLocal=JSON.parse(localStorage.getItem("todos"))
    setodos(todoLocal);
  }
};

  return (
    <div className="App">
     <header>
     <h1>THINGS ToDo!</h1>
     </header>
   <Form  setstatus={setstatus} inputdata={inputdata} setinputData={setinputData} todos={todos} setodos={setodos} />
   <ToDoList  filteredTodos={filteredTodo} todos={todos} setodos={setodos} />
      </div>
  );
}

export default App;
