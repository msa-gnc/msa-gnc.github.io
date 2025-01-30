import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from '../redux/actions/counterAction'
import "./counter.css"

const Counter = () => {

  const {sayac,text} = useSelector((state)=>state.counterReducer)

  const dispatch = useDispatch()



  return (
    <div className='counterContainer'>
      <div className='counter'> 

        <div className='headers'>
        <h1>{sayac}</h1>
        <h4>{text}</h4>
        </div>
     
      <div className='buttons'>
        <button onClick={()=>dispatch(increase())} className='btn  btn1' >Increase</button>

        <button onClick={()=>dispatch(reset())} className='btn btn2' >Reset</button>

        <button onClick={()=>dispatch(decrease())}  className='btn btn3' >Decrease</button>
      </div>
      
      </div>
    </div>
  )
}

export default Counter