import React, { useState } from 'react'

interface ITodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className='input-field mt2'>
            <input value={title}
                   onChange={changeHandler}
                   onKeyPress={keyPressHandler}
                   type='text'
                   id='title'
                   placeholder='Enter name'/>
            <label htmlFor='title' className='active'>
                Enter name
            </label>
        </div>
    )
}