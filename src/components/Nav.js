import React from 'react'
import '../components/Nav.css'
import {Link} from 'react-router-dom';

function Nav() {

    // var menulist = document.getElementById('menulist')
    // menulist.style.maxHeight = '0px'

    // function menutoggle(){
    //     if(menulist.style.maxHeight == '0px'){
    //         menulist.style.maxHeight = '100vh'
    //     }else{
    //         menulist.style.maxHeight = '0px'
    //     }
    // }
    const user = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <header>
        <div className='content flex_space'>
            <div className='logo' >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjNwO3rwb6V781P6KJdRkUmPjOiJC2toWkw&usqp=CAU' alt='LOGO' />
            </div>
            <div className='navlinks1'>
                <ul id='menulist'>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Rooms</a></li>
                    <li><a>Contacts</a></li>
                  <Link to='/login'><li style={{textDecoration:'none'}}><button className='primary-btns' type='button' name='button'>Register/Sign In</button></li></Link>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                </ul>
                <span><i class="fa-solid fa-bars" ></i></span>
            </div>
        </div>
    </header>
  )
}

export default Nav