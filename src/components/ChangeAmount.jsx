import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../state'

const ChangeAmount = () => {
  const dispatch = useDispatch()
  // const action = bindActionCreators(actionCreator, dispatch) // since we only have 2 actions we can use object destructing here
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreator, dispatch)
  const balance = useSelector(state => state.amount)
  return (
    <div className='text-center'>
        {/* <button type='button' className='bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2' 
        onClick={()=> dispatch( actionCreator.withdrawMoney(100))}>-</button>
        change Amount
        <button type='button'className='bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2 ml-2
        ' onClick={()=> dispatch( actionCreator.depositMoney(100))}>+</button>     using this dispatch function with is a length process to use 
        every time so we use bindActionCreator*/}  
        <button type='button' className='bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2' 
        onClick={()=> withdrawMoney(100)}>-</button>
        {`change Amount (${balance})`}
        <button type='button'className='bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2 ml-2
        ' onClick={()=> depositMoney(100)}>+</button>
    </div>
  )
}

export default ChangeAmount