import { useEffect, useReducer } from "react"
import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"







export const TodoApp = () => {

    
const { todos, todosCount, pendingTodosCount,  handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()


  return (
    <>

        <h1>TodoApp { todosCount() } <small> Pendientes: { pendingTodosCount() } </small> </h1>
        <hr/>

        <div className="row">
            <div className="col-7">

                
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo= { handleToggleTodo }
                    />

            </div>
            <div className="col-5">
                <h4>Agregar Todo  </h4>
                <hr/>

                <TodoAdd onNewTodo={ handleNewTodo }/>
                      

               
            </div>

        </div>

    </>
  )
}
