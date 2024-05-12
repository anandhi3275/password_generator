import { useState } from "react"

const usePasswordGenerator=()=>{
    const [password,setPassword]=useState("");
    const [errorMessage,setErrorMessage]=useState("");

    const generatePassword=(checkboxData,length)=>{
        let charset="",
        generatedPassword="";

        const selectedOption=checkboxData.filter(checkbox=>checkbox.state);

        if(selectedOption.length===0){
            setErrorMessage("select at least one option");
            setPassword("");
            return;
        }

        selectedOption.forEach((option)=>{
            switch(option.title){
                case "Include UpperCase Letters":
                    charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include LowerCase Letters":
                    charset+="abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset+="0123456789";
                    break;
                case "Include Special Characters":
                    charset+="!@#$%^&*";
                    break;
                default:break;
            }
        })
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()*charset.length);
            generatedPassword+=charset[randomIndex];
        }

        setPassword(generatedPassword);
        setErrorMessage("");
    }

    return {password,errorMessage,generatePassword}
}
export default usePasswordGenerator