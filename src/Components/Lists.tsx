import { useTodos } from "../Store/Index";
import { useSearchParams } from "react-router-dom";
const Lists = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos(); 
  const [searchParams] = useSearchParams();
  const todosdata= searchParams.get("todos");
  console.log("todos=",todosdata);
  let taskdata = todos;

  if(todosdata==="active"){
    taskdata=taskdata.filter((e)=>{
      return !e.completed;
    })
  }
  else if(todosdata==="completed"){
    taskdata=taskdata.filter((e)=>{
      return e.completed;
    })
  }
  return (
      <ul className="ul mt-5">
        {taskdata.map((todo,id) => {
          return (
            <li key={id}>
              <h4 className="list mb-4 p-2 row">
                <div className="col-md-4 col-3">
                <input type="checkbox" className="me-4 checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)}/>
                </div>
                <div className="col-md-4 col-4">
                <span className="task">{todo.task}</span>
                </div>
                <div className="col-md-4 col-5">
                {
                  todo.completed===true && 
                  (
                    <button className="btn btn-danger ms-5" type={'button'} onClick={()=>deleteTodo(todo.id)}>Delete</button> 
                  )
                }
                </div>
              </h4>
            </li>
          );
        })}
      </ul>
  );
}


export default Lists;
