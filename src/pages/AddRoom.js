import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'

function AddRoom() {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [rentperday, setRentperday] = useState('')
    const [maxcount, setMaxcount] = useState('')
    const [description, setDescription] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [type, setType] = useState('')
    const [imageurl1, setImageurl1] = useState('')
    const [imageurl2, setImageurl2] = useState('')
    const [imageurl3, setImageurl3] = useState('')

   async function addRoom(){
         
        const newRoom = {
            name,
            address,
            rentperday,
            maxcount,
            description,
            phonenumber,
            type,
            imageurls:[imageurl1,imageurl2,imageurl3]
        }
        
        try{
            const result = await axios.post('http://localhost:8000/api/rooms/addroom' , newRoom)
            
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className='container mt-5'>
    <div>
       <h2>Add Rooms</h2>
       <p style={{textAlign:'justify',}}> 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit amet asperiores iure libero atque error voluptate. Possimus non ipsum corporis! Consequuntur saepe, eveniet dolore aliquam doloribus velit inventore veritatis harum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit amet asperiores iure libero atque error voluptate. Possimus non ipsum corporis! Consequuntur saepe, eveniet dolore aliquam doloribus velit inventore veritatis harum!
       </p>
    </div>
     <div className='border rounded p-3'>
     <Form>
       <div style={{float: 'right', margin: '8px 10px'}}>
       <Link to={'/admin'} style={{textDecoration:'none'}}><i class="fa-solid fa-xmark" ></i></Link>
       </div>
     <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
       <Form.Control type="text" placeholder="Enter Room Name" 
       value={name} onChange={(e)=>(setName(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
       <Form.Control type="text" placeholder="Enter Address" 
       value={address} onChange={(e)=>(setAddress(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formRentperday">
     <Form.Label>Rent Per Day</Form.Label>
       <Form.Control type="text" placeholder="Enter Rentperday" 
       value={rentperday} onChange={(e)=>(setRentperday(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formMaxcount">
     <Form.Label>MaxCount</Form.Label>
       <Form.Control type="text" placeholder="Enter Maxcount" 
       value={maxcount} onChange={(e)=>(setMaxcount(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formDesg">
     <Form.Label>Description</Form.Label>
       <Form.Control type="text" placeholder="Enter Descriptiom"  
       value={description} onChange={(e)=>(setDescription(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formPhoneno">
     <Form.Label>Phone N.o</Form.Label>
       <Form.Control type="text" placeholder="Enter PhoneNumber"  
       value={phonenumber} onChange={(e)=>(setPhonenumber(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formType">
     <Form.Label>Type</Form.Label>
       <Form.Control type="text" placeholder="Enter RomeType"  
       value={type} onChange={(e)=>(setType(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formImg1">
     <Form.Label>Image 1</Form.Label>
       <Form.Control type="text" placeholder="Enter Imageurl1"  
       value={imageurl1} onChange={(e)=>(setImageurl1(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formImg2">
     <Form.Label>Image 2</Form.Label>
       <Form.Control type="text" placeholder="Enter Imageurl2"  
       value={imageurl2} onChange={(e)=>(setImageurl2(e.target.value))}
       />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formImg3">
     <Form.Label>Image 3</Form.Label>
       <Form.Control type="text" placeholder="Enter Imageurl3"  
       value={imageurl3} onChange={(e)=>(setImageurl3(e.target.value))}
       />
     </Form.Group>
     <Button  variant="success" type="button" onClick={addRoom}>
       Add
     </Button>
    <Link to={'/admin'}>
       <Button className='ms-3' variant="danger" type="button">
         Close
       </Button>
    </Link>
   </Form>
     </div>
   </div>
  )
}

export default AddRoom