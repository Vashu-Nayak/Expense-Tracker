import React, {useContext} from 'react';
import  {GlobalContext}  from '../context/GlobalState'
import { useState } from 'react';

const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext) ;
    
    const [text, setText]=useState('');
    const [amount, setAmount]=useState(0);

    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

  return (
    <>
        <h3>Add new Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text" >Text</label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter Text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount" >Amount <br/> (negative - expense, positive - income) </label>
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter amount...'/>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction