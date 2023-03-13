import React, {useState} from 'react'
import Success from '../components/Success';
import Error from '../components/Error';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState()
    const [error, setError] = useState()

   async function Login(){
     
            const User={
                
                email,
                password
                
            }
            try{
                setError(false)
                const result = await axios.post('http://localhost:8000/api/users/login' ,User)
                setSuccess(true)
                localStorage.setItem('currentUser', JSON.stringify(result))
                window.location.href='/'
            }catch (err){
                console.log(err)
                setError(true)
            }
            console.log(User)
        } 
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
            {error && (<Error/>)}
            {success && (<Success message='Registration Success'/>)}
                <div style={{boxShadow: 'rgba(0, 0, 0, 1.35) 0px 5px 15px', padding: '30px', borderRadius: '5px', marginTop:'10px'}}>
                        <h2 style={{fontSize:'28px',fontWeight:'bold',padding:'10px',textAlign:'center'}}>Login</h2>
                        <input style={{boxShadow:'none', border:'1px solid black'}} type='text' className='form-control mt-3' placeholder='Email'
                        value={email} onChange={(e)=>(setEmail(e.target.value))} />
                         <input style={{boxShadow:'none',border:'1px solid black'}} type='text' className='form-control mt-3' placeholder='Password'
                        value={password} onChange={(e)=>(setPassword(e.target.value))} />
                        <button className='btn btn-dark mt-3' onClick={Login}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login