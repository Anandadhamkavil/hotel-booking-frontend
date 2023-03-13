import React, { useState } from 'react'
import axios from 'axios'
import Success from '../components/Success';
import Error from '../components/Error';

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [success, setSuccess] = useState()
    const [error, setError] = useState()

    async function register(){
        if(password===cpassword){
            const user={
                name,
                email,
                password,
                cpassword
            }
            try{
                setError(false)
                const result = await axios.post('http://localhost:8000/api/users/register' ,user)
                setSuccess(true)
            }catch (error){
                console.log(error)
                setError(true)
            }
        } else{
            alert('Password not match')
        }
        // navigate('/login')
    }
  return (
    <div>
        
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
            {error && (<Error/>)}
            {success && (<Success message='Registration Success'/>)}
                <div style={{boxShadow: 'rgba(0, 0, 0, 1.35) 0px 5px 15px', padding: '30px', borderRadius: '5px', marginTop:'10px'}}>
                        <h2 style={{fontSize:'28px',fontWeight:'bold',padding:'10px',textAlign:'center'}}>Register</h2>
                        <input style={{boxShadow:'none', border:'1px solid black'}} type='text' className='form-control mt-3' placeholder='Name'
                        value={name} onChange={(e)=>(setName(e.target.value))} />
                        <input style={{boxShadow:'none', border:'1px solid black'}} type='text' className='form-control mt-3' placeholder='Email'
                        value={email} onChange={(e)=>(setEmail(e.target.value))} />
                         <input style={{boxShadow:'none',border:'1px solid black'}} type='text' className='form-control mt-3' placeholder='Password'
                        value={password} onChange={(e)=>(setPassword(e.target.value))} />
                         <input style={{boxShadow:'none',border:'1px solid black'}} type='text' className='form-control mt-3' placeholder='Confirm Password'
                        value={cpassword} onChange={(e)=>(setCpassword(e.target.value))} />
                        <button className='btn btn-dark mt-3 mb-4' onClick={register}>Register</button>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register