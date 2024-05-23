
import './App.css';
import './styles.css'
import { useState } from 'react';
import usePasswordGenerator from './hooks/password-generate';
import PasswordStrengthIndicator from './components/StrengthChecker';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
function App() {
  const [length,setLength]=useState(4);
  const [copied,setCopied]=useState(false);
  const [checkboxData,setCheckboxData]=useState([
    {title:"Include UpperCase Letters",state:false},
    {title:"Include LowerCase Letters",state:false},
    {title:"Include Numbers",state:false},
    {title:"Include Special Characters",state:false},
  ])

  const handleCheckboxChange=(index)=>{
    const updatedCheckboxDate=[...checkboxData]
    checkboxData[index].state=!checkboxData[index].state;
    setCheckboxData(updatedCheckboxDate);
  }

  const handleCopy=()=>{
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(()=>{
      setCopied(false);
    },1000);
  }
  const {password,errorMessage,generatePassword}=usePasswordGenerator()
  return (
    <div className="container">
     {/*password text and copy*/}
     {password &&<div className='header'>
      <div className='title'>
        {password}
      </div>
      
     <Button text={copied?"copied":"copy"} customClass="copybtn" onClick={handleCopy}/>
     </div>
    }
     <div className='charLength'>
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
          type='range' min='4' max='20' 
          onChange={(e)=>{setLength(e.target.value)}}
          value={length}/>
     </div>
     {/*check boxes */}
      <div className='chechBoxes'>
        {checkboxData.map((checkbox,index)=>{
          return(
          <Checkbox key={index} title={checkbox.title} onChange={()=>handleCheckboxChange(index)} state={checkbox.state}/>)
        })}
      </div>
      {/*Strength indicator */}
      <PasswordStrengthIndicator password={password}/>


      {/*error handling*/}
      {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
      {/*password generate button */}
      
      <Button text={"Generate Password"} customClass="generatebtn" onClick={()=>
        generatePassword(checkboxData,length)} />
    </div>
  );
}


export default App;
