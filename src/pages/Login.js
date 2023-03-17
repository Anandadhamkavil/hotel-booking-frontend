import React, {useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   async function Login(){
     
            const User={
                
                email,
                password
                
            }
            try{
                const result = await axios.post('http://localhost:8000/api/users/login' ,User)
                localStorage.setItem('currentUser', JSON.stringify(result))
                window.location.href='/'
                swal.fire('Congratulations', 'Login Successfull..', 'success')
            }catch (err){
                console.log(err)
                swal.fire('Oops', 'Something went wrong...', 'error')

            }
            console.log(User)
        } 
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
                <div style={{boxShadow: 'rgba(0, 0, 0, 1.35) 0px 5px 15px', padding: '30px', borderRadius: '5px', marginTop:'10px'}}>
                        <h2 style={{fontSize:'28px',fontWeight:'bold',padding:'10px',textAlign:'center'}}>Login</h2>
                        <input style={{boxShadow:'none', border:'1px solid black'}} type='text' className='form-control mt-3' placeholder='Email'
                        value={email} onChange={(e)=>(setEmail(e.target.value))} />
                         <input style={{boxShadow:'none',border:'1px solid black'}} type='text' className='form-control mt-3' placeholder='Password'
                        value={password} onChange={(e)=>(setPassword(e.target.value))} />
                        <button className='btn btn-dark mt-3' onClick={Login}>Login</button>
                        <Link to='/register'><a style={{textDecoration:'none',color:'black', float:'right',marginTop:'20px'}}>Create An Account</a></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login