import React, { useState } from 'react';


const App=()=>{
    const [state, setstate] = useState("")
    const [state2, setstate2] = useState("")
    const [display, setdisplay] = useState("")
    const [display2, setdisplay2] = useState("")
const inputEvent1=(event)=>
{
    setstate(event.target.value)
}
const inputEvent2=(event)=>
{
    setstate2(event.target.value)
}
const submitEvent=(event)=>{

    event.preventDefault();
    setdisplay(state)
    setdisplay2(state2)
  
}
   return(
   <>
   {/* controlled components */}
   
    <div>
    <form onSubmit={submitEvent}>
    <div>
        <h1 >Hello {display} {display2} </h1>
        <input type="text" 
        name="enter your name" 
        onChange={inputEvent1}
        
         />
        
        <br />
        <input type="text" 
        name="enter your last name" 
        onChange={inputEvent2}
      
         />
        <br />
        <button type='submit'> Click me</button>
        </div>
        </form>
    </div>
    </>
   );
};
export default App;

/*const App=()=>{

const [name,setName]=useState();
const [submitEvent,setSubmitEvent]=useState();

const InputEvent=(type)=>{
  //console.log(type.target.value)
  setName(type.target.value)

};
const onSubmit=()=>{
  setSubmitEvent(name);

};




  return(
    <>
      <div>
        <h1>Hello{submitEvent}</h1>
        <input type='text' placeholder='Enter Your Name' 
        onChange={InputEvent}
        value={name}
         />
        <button onClick={onSubmit}>Click me</button>
      </div>
    </>
  )
}
export default App*/


/*const App= ()=> {
  const [cTime, setCTime] = useState(newTime);
  let newTime=new Date().toLocaleTimeString();
  const UpadateTime=()=>{
      newTime=new Date().toLocaleTimeString();
    setCTime(newTime);
  }
  return (
    <>
    <h1>{cTime}</h1>
    <div>
      
      <button onClick ={UpadateTime } >Get Time</button>
    </div>
    </>
  );
}
export default App*/