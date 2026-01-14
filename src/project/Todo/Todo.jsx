import { useState } from "react";
import { MdCheck,MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export  const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState ([]);

    const handleInputChange  = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!inputValue) return;


        if(tasks.includes(inputValue)) {
              setInputValue("");
           return;
        } 

        setTasks ((prevTask) => [...prevTask, inputValue]);
        setInputValue("");
    };

    return (
         <section className="todo-container">
         <header>
            <h1>Todo List</h1>
         </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input 
                        type="text" 
                        className="todo-input" 
                        autoComplete="off"
                          value={inputValue} 
                          onChange={(event)=>setInputValue(event.target.value)}
                             />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {tasks.map((curTask, index) => {
                      return <li key={index} className="todo-item">
                      <span>{curTask}</span>
                      <button className="check-btn"><MdCheck /></button>
                      <button className="delete-btn"><MdDeleteForever /></button>
                      </li>;
                    })}
                </ul>

            </section>
         </section>





    )
}