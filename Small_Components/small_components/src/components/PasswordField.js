import React, {useState} from 'react'
import './PasswordField.css'
import { PiEye, PiEyeClosed } from "react-icons/pi";

const PasswordField = () => {
    const [password, setPassword] = useState(true)
    const handleEye = () => {
setPassword(!password)
    }
  return (
    <div className='passwordField'>
        <h1>Password Field</h1>
        <div className='password_input_field'>
        <input className='pass_input' type={password ? 'password' : 'text'} placeholder='Password' />
        <span className='password_eye' onClick={()=>handleEye()}>
        {password ? <PiEyeClosed /> :
        <PiEye />}
        </span>
        </div>
        </div>
  )
}

export default PasswordField