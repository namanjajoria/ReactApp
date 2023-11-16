import TextField from '@mui/material/TextField';
import { FormEvent, useState } from 'react';
import { useTodos } from '../Store/Index';

const Form = () => {
  const [data,setData] = useState("");
  const {handleAdd} =useTodos();
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleAdd(data);
    setData("");
  }
  return (
    <div className='d-flex flex-column align-items-center mt-3'>
    
   <form className='d-flex justify-content-center w-75 mt-4' onSubmit={handleSubmit}>
    <TextField id="outlined-basic" label="Write your tasks" variant="outlined" className='tf me-4' value={data} onChange={(e)=> setData(e.target.value)} />
    
    <button className='btn btn-primary ps-4 pe-4' type='submit'>ADD</button>
   </form>
  </div>

  )
}

export default Form
