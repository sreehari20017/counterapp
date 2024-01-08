import React, { useState } from 'react'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.CounterSlice.count)

  const[amount,setAmount]=useState(0)
  const handleIncrement=()=>{
    if(amount>0){
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }
    else{
      alert("enter valid amount")

    }
  }
  return (
    <div style={{ width: '600px' }} className='border rounded p-5 d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{ fontSize: '100px' }}>{count}</h1>
      <div className='d-flex justify-content-evenly mt-5 w-100'>
        <button onClick={() => dispatch(decrement())} className='btn btn-warning'>Decrement</button>
        <button onClick={() => dispatch(reset())} className='btn btn-danger'>Reset</button>
        <button onClick={() => dispatch(increment())} className='btn btn-success'>Increment</button>



      </div>
      <div className='d-flex justify-content-between mt-5 w-100'>
        <input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" className="form-control" placeholder='enter the amount to be incremented!!!' />
        <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment by Amount</button>



      </div>

    </div>
  )
}

export default Counter