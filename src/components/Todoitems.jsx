import React from 'react'
import tick from '../assets/tick.png'
import nottick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png';

const Todoitems = ({text ,id ,isComplete,deletetodo, toggle}) => {
  return (
    <div className='flex item-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className=' flex flex-1 items-center cursor-pointer'>
            <img  src={isComplete ? tick : nottick} alt="" className='w-7' />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={()=>{deletetodo(id)}} src={delete_icon} className='w-3.5 cursor-pointer' alt="" />
    </div>
  )
}

export default Todoitems