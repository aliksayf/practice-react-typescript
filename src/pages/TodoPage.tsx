import React, { useState, useEffect } from 'react'
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";

export const TodoPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo ={
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        const newTodos = [...todos]
        newTodos.map(todo => todo.id === id ? todo.completed = !todo.completed : '')
        setTodos(newTodos)
    }

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Are you sure that you want to delete this task?')
        if (shouldRemove){
            setTodos(prev => prev.filter(todo => todo.id !== id ))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler}/>

            <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
        </>
    )
}