import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
    const [inputValue , setInputValue] = useState({});    // As we are taking some objects as input

    const handleInputChange = (value) =>{
        setInputValue({ id: value, content: value, checked: false});
        // id should be unique and must be remain , 
        // As we are not allowing same value to store again , so our id is also unique
        // we can also use math.random() , etc.  
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", checked: false});
    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input 
                    type="text" 
                    className="todo-input" 
                    autoComplete="off" 
                    value={inputValue.content}
                    onChange={(event) => handleInputChange(event.target.value)}>
                    </input>
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
    );
};