import React, { useEffect, useRef, useState } from 'react'
import todoicon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

    const [todolist,setTodolist]=useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")):[]);

    const inputRef= useRef();

 

    const add=()=>{
        const inputtext=inputRef.current.value.trim();

        if (inputtext === "" ) {
            return null;
        }
        const newtodo={
            id: Date.now(),
            text: inputtext,
            isComplete:false,
        }
        setTodolist((prev)=>[...prev, newtodo]);
        inputRef.current.value= "";
    }

    const deletetodo=(id)=>{
        setTodolist((prvtodo)=>{
          return  prvtodo.filter((todo)=>todo.id !== id)
        })
    }

    const toggle=(id)=>{
        setTodolist((prevtodo)=>{
        return prevtodo.map((todo)=>{
            if(todo.id === id){
                return {...todo,isComplete:!todo.isComplete}
            }
            return todo;
        })
    })
    }
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todolist))
    },[todolist])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todoicon} alt="" />
            <h1 className='text-3xl font-semibold'>Krishna Migration </h1>
        </div>

        <div className='flex items-center my-7 bg-grey-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add Your Task'/>
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-large font-medium cursor-pointer'>ADD</button>
        </div>

        <div>
        {todolist.map((item, index)=>{
                return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deletetodo={deletetodo} toggle={toggle}/>
        })}

        </div>


    </div>
  )
}

export default Todo
