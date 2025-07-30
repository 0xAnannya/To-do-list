import ToDo from "./ToDo"
const ToDoList =({todos ,setodos, filteredTodos}) =>{

    
    return(
        <div className="todo-container">
            <ul className="todo-list">
           { filteredTodos.map(todo => (
           <ToDo todo={todo} todos={todos} setodos={setodos} key={todo.id} text={todo.text} 
           />    
           ))}

            </ul >
        </div>
    );
};
export default ToDoList;