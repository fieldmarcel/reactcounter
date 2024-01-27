import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


 
  // const StateTutorial =()=>{

  // const[inputValue,NewChangeValue]=useState("Shivanshu");
  // const onChange=(event)=>{
  //   const newval=event.target.value;
  //   NewChangeValue(newval);
  // }
 

  //   <div>
  //     <h1>{inputValue} </h1>
  //     <input type='text' value={inputValue} placeholder='type the script' onChange={onChange}>

  //     </input>
  //   </div>
  // )
  
  function App(){
  
    const [count ,setCount]=useState(0)
  function  decreaseHandler(){
  setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    
    <div className ="w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151]">
     <div  className='text-[#3fb988] font-medium  text-2xl m-3' >Increment & Decrement</div> 
  <div className='bg-[#f6f3f3] flex justify-center gap-12 py-3  rounded-sm text-[25px] text-[#344151]  '>
    <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
      -
      </button >
    <div className='font-bold gap-12 text-5xl'> 
{count}
    </div>
    
    <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
      +
    </button>
       </div>
    <button onClick={resetHandler} className='  m-5 gap-20 font-bold text-3xl bg-[#3fb988] '>
      RESET
    </button>
    </div>
  );
 }

export default App;
