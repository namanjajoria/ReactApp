import { ReactNode, createContext, useContext, useState } from 'react';

export const Tododata= createContext <Todocontext | null> (null);

export type Todocontext={
    todos:Todo[];
    handleAdd:(task:string)=>void;
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}

export type TodoProvide={
  children:ReactNode;
}

export type Todo={
    id:number;
    task:string;
    completed:boolean;
    createdAt:Date;
}



export const TodosProvider = ({children}:TodoProvide) => {
    const [todos,setTodos]=useState<Todo[]>(()=>{
      try{
        const tododata=localStorage.getItem("todos") || "[]";
        return JSON.parse(tododata);
      }
      catch(error){
        return error;
      }
    });
    const handleAdd=(task:string)=>{
      setTodos((pre)=>{
       const NewTodos:Todo[]=[
        {
          id:Math.random(),
          task:task,
          completed:false,
          createdAt:new Date()
        },
        ...pre
       ]
       console.log(pre);
       console.log(NewTodos);
       localStorage.setItem("todos",JSON.stringify(NewTodos))
       return NewTodos
      })
}

   
 const toggleTodo=(id:number)=>{
  setTodos((pre)=>{
    const NewTodos=pre.map((e)=>{
      if(e.id===id){
        return {...e, completed: !e.completed};
      }
      return e;
    })
    localStorage.setItem("todos",JSON.stringify(NewTodos))
   return NewTodos;
  })
}
  
    const deleteTodo=(id:number)=>{
      setTodos((pre)=>{
        const NewTodos= pre.filter((e)=>{
          if(e.id!=id){
            return e;
          }
        })
        localStorage.setItem("todos",JSON.stringify(NewTodos))
        return NewTodos;
      })
    }


  return (
      <Tododata.Provider value={{todos,handleAdd,toggleTodo,deleteTodo}}>
        {children}
      </Tododata.Provider>
  )
}

export const useTodos=()=>{
    const taskvalue=useContext(Tododata);
    return taskvalue;
}




