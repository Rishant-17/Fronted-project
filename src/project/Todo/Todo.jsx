//importing the different files
import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { setLocalStorageTodoData, getLocalStorageTodoData} from "./TodoLocalStorage";





export const Todo = () => {
  const [tasks, setTasks] = useState(() => getLocalStorageTodoData());

 

  const handleFormSubmit = ({ id, content, checked }) => {
    if (!content.trim()) return;

    const isDuplicate = tasks.find(
      (task) => task.content === content
    );
    if (isDuplicate) return;

    setTasks((prev) => [...prev, { id, content, checked }]);
  };

  // Update local storage whenever tasks change
  setLocalStorageTodoData(tasks);

  //function to delete a todo item
  const handleDeleteTodo = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

//function to check a todo item

  const handleCheckedTodo = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, checked: !task.checked }
          : task
      )
    );
  };

  //function to clear all todo items
  const handleTodoData = () => {
    setTasks([]);
  };





//main return function

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {tasks.map((task) => (
            <TodoList
              key={task.id}
              id={task.id}
              data={task.content}
              checked={task.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
