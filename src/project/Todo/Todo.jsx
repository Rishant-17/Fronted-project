import { useState, useEffect } from "react";
import { MdCheck,MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export  const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState ([]);
    const [dateTime, setDateTime] = useState("");




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


    //todo date and time
   useEffect(() => {
    const interval = setInterval(() => {
    const now = new Date();
    const formatedDate = now.toLocaleDateString();
    const formatedTime = now.toLocaleTimeString();
    setDateTime( `${formatedDate} - ${formatedTime}`);
    }, 1000);
  
    return () => clearInterval (interval);
}, []);


//todo delete function

const handleDeleteTodo = (value) => {
    console.log("Delete button clicked");
    console.log(value);
    const updatedTask = tasks.filter((curTask) => curTask !== value);
    setTasks(updatedTask);
};

//todo clear all function
const handleTodoData = () => {
    setTasks([]);

};


    return (
         <section className="todo-container">
         <header>
            <h1>Todo List</h1>
            <h2 className="date-time">
            {dateTime}</h2>
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
                      <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}><MdDeleteForever /></button>
                      </li>;
                    })}
                </ul>

            </section>

          <section> 
          <button className="clear-btn" onClick={handleTodoData}>Clear All</button>
          </section>

         </section>





    )
}