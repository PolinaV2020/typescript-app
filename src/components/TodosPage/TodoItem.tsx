import React, { FC } from 'react';
import { Todo } from "../../types/todo";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed}></input>
            <div>{todo.id}</div>
            <div>{todo.title}</div>
        </div>
    );
};

export default TodoItem;