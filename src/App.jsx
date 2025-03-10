import { useState } from 'react'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'




function App() {

  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [simpleIntrest,setsimpleintrest]=useState("");
  //to get input data

  // console.log(principle);

  const [isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  
  const [isInvalidRate,setIsInvalidRate]=useState(false)
  
  const [isInvalidTime,setIsInvalidTime]=useState(false)

  

  //validation check
  const validInput = (tag) =>{

    //destructure
    const {name,value}=tag
    console.log(name,value);

    //to check numbers in string
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*.?[0-9]+$/)){
      
        if(name=='principle'){
          setPrinciple(value)
          setIsInvalidPrinciple(false)
        }
        else if(name=='rate'){
          setRate(value)
          setIsInvalidRate(false)
        }
        else{
          setTime(value)
          setIsInvalidTime(false)

        }    

   }else{
     
    if(name=="principle"){
      setIsInvalidPrinciple(true)
    }
    else if(name=="rate"){
      setIsInvalidRate(true)
    }
    else{
      setIsInvalidTime(true)
    }

  }

    console.log(tag); 

  }

  const handlecalc=(e)=>{
    e.preventDefault()
    console.log("button click");
    
    if(principle && rate && time){
      setsimpleintrest(principle*rate*time/100)
    }
    else{
      alert("plase fill the field")
    }
    
  }

  const handleReset=()=>{

    setPrinciple("")
    setRate("")
    setTime("")
    setsimpleintrest(0)

    setIsInvalidPrinciple(false)
    setIsInvalidRate(false)
    setIsInvalidTime(false)
    
  }

  return (
    <>
      
         <div style={{minHeight:"100vh",width:"100%"}} className="align-item-center justify-content-center d-flex bg-dark p-5 ">

        <div style={{width:"600px"}} className='text-center bg-light p-5 rounded'>
            <h3>Simple Interest Calculator</h3>
            <p>calculate your simple interest easily</p>

            <div className="d-flex rounded align-item-center justify-content-center bg-warning p-5 text-light flex-column">
              <h2> ₹ {simpleIntrest}</h2>
              <h3>Total simple interset</h3>
            </div>

            <form action="" className='mt-5'>
        <div className='mb-3'>

        {/* to get input data = onChange */}

         <TextField name='principle' value={principle || ""} onChange={e=>validInput(e.target)} style={{width:"100%"}}  id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
         </div>
        {
        isInvalidPrinciple &&
         <p className='text-danger'>invalid principle amount</p>
        }
         <div className='mb-3'>
         <TextField name='rate' value={rate || ""}  onChange={e=>validInput(e.target)} style={{width:"100%"}}  id="outlined-basic" label="Rate" variant="outlined" />
         </div>
         {
        isInvalidRate &&
         <p className='text-danger'>invalid principle amount</p>
        }
         <div className='mb-3'>
         <TextField name='time' value={time || ""}  onChange={e=>validInput(e.target)} style={{width:"100%"}}  id="outlined-basic" label="Time period" variant="outlined" />
         </div>
         {
         isInvalidTime &&
         <p className='text-danger'>invalid time</p>
         }
<Stack direction="row" spacing={2}>
  <Button disabled={isInvalidPrinciple || isInvalidRate || isInvalidTime} type='submit' onClick={handlecalc} className="w-100 bg-dark text-light"style={{height:"50px"}} variant="calculate">Calculate</Button>
<Button onClick={handleReset} className="w-100" variant="outlined">reset</Button>
</Stack>
       </form>
        </div>
       </div>
    </>
  )
}

export default App

