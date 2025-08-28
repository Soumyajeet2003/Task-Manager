import { useState } from "react";
import "./ToDo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData , setLocalStorageTodoData } from "./TodoLocalStorage";

export const ToDo = () => {
    
    const [task , setTask] = useState(() => getLocalStorageTodoData());
    
    const handleFormSubmit = (inputValue) => {
        const { id , content , checked } = inputValue;

        // To check if the input field is empty or not
        if(!content) return;
        // To check if the data is already exisrting or not
        const todoContentMatched = task.find((curTask) => curTask.content === content); // As inputvalue is an Array , we can't use 'includes() method.'
        if(todoContentMatched) return;
        /*else if(task.includes(inputValue)) {
            return;
        };*/

        setTask((prevTask) => [... prevTask , { id, content, checked}]);     
    };
    
    // Add data to Local Storage-----------
    setLocalStorageTodoData(task);

    // Handle Delete Todo function
    /*const handleDeleteTodo = (index) => {
        task.splice(index , 1);
        setTask(task);
    };*/
   const handleDeleteTodo = (value) => {
        const updateTask = task.filter((curTask) => curTask.content != value);
        setTask(updateTask);
   };

   const handleClearTodoData = () => {
        setTask([]);
   };

   const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content === content){
                return {... curTask , checked: !curTask.checked};
            }
            else{
                return curTask;
            }
        });
        setTask(updatedTask);
   };   

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit}/>
            <section className="myUnOrderList">
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList key={curTask.id} data={curTask.content} 
                                checked={curTask.checked}
                                onHandleDeleteTodo={handleDeleteTodo}
                                onHandleCheckedTodo={handleCheckedTodo}/>
                            );
                        })
                    }   
                </ul>
            </section>
            <section className="clear-btn" onClick={handleClearTodoData}>
                <button>Clear All</button>
            </section>
        </section>
    );
};