import React from "react";
const PasswordStrengthIndicator=({password})=>{
    const getPasswordStrength=()=>{
        const passwordLength=password.length;

        if(passwordLength<1){
            return ""
        }
        else if(passwordLength<4){
            return "Very week";
        }
        else if(passwordLength<8){
            return "Poor";
        }
        else if(passwordLength<12){
            return "Medium";
        }
        else if(passwordLength<16){
            return "Strong";
        }
        else{
            return "Very Strong";
        }
    }
    const PasswordStrength=getPasswordStrength();
    if(!PasswordStrength) return <React.Fragment></React.Fragment>
    return (
        <div className="passwordStrength">
            Strength:<span style={{fontWeight:"bold"}}>{PasswordStrength}</span>
        </div>
    )
}
export default PasswordStrengthIndicator