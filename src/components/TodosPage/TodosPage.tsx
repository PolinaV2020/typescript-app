import React, { useEffect, useState, FC } from 'react';
import axios from "axios";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/todo";
import List from '../../components/List';


const TodosPage: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    
    const fetchTodos = async () => {
        try {
          const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10");
          setTodos(response.data);
        } catch (e) {
          alert(e)
        }
      }
    
      useEffect(() => {
        fetchTodos();
      },[])
    
    return (
        <List items={todos} renderItem={(todo: Todo) => <TodoItem todo={todo} key={todo.id}/>}/>
    );
};

export default TodosPage;