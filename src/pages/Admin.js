import React, { useEffect, useState } from 'react'
import '../pages/Admin.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';


function Admin() {

  const [bookings, setBookings] = useState([])
  const [rooms, setRooms] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8000/api/bookings/getallbookings')
        setBookings(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get('http://localhost:8000/api/rooms/getallrooms')
        setRooms(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    const userData = async () => {
      try {
        const result = await axios.get('http://localhost:8000/api/users/getallusers')
        setUsers(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    userData()
  }, [])
  return (
    <div className='row2 mt-5' style={{ borderRadius: '5px', padding: '50px', marginLeft: '50px', marginRight: '50px' }}>
        <h1 className='text-center'>Admin Panel</h1>
        <Stack  direction="horizontal" gap={2}>
        <Link to='/admin/add'><a className='btn btn-success mt-3 me-4'>Add Rooms</a></Link >
        <p className='mt-4' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, labore quae ex amet vero debitis, mollitia voluptatibus officia accusamus autem quisquam ipsum? Officia consectetur quibusdam dolor odit. Voluptatum, labore cumque!.
        labore quae ex amet vero debitis, mollitia voluptatibus officia accusamus autem quisquam ipsum? Officia consectetur quibusdam dolor odit. Voluptatum, labore cumque!
        </p>
      </Stack>
      <div className="tabbed" style={{ marginBottom: '20px' }}>
        <input type="radio" name="tabs" id="tab-nav-1" />
        <label for="tab-nav-1">Bookings</label>
        <input type="radio" name="tabs" id="tab-nav-2" />
        <label for="tab-nav-2">Rooms</label>
        <input type="radio" name="tabs" id="tab-nav-3" />
        <label for="tab-nav-3">Users</label>
        <div className="tabs" >
          <div>
            <h2>Bookings</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Room</th>
                  <th>Booking Id</th>
                  <th>Room Id</th>
                  <th>Total Days</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  bookings.map((booking, index) => (<tr>
                    <td>{index + 1}</td>
                    <td>{booking.room}</td>
                    <td>{booking._id}</td>
                    <td>{booking.roomid}</td>
                    <td>{booking.totalDays} Days</td>
                    <td>₹{booking.totalamount}</td>
                    <td>{booking.status}</td>
                  </tr>))}

              </tbody>
            </Table>
          </div>
          <div>
            <h2>Rooms</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Room Id</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Rent</th>
                  <th>Type </th>
                </tr>
              </thead>
              <tbody>
                {
                  rooms.map((room, index) => (<tr>
                    <td>{index + 1}</td>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.phonenumber}</td>
                    <td>₹{room.rentperday}</td>
                    <td>{room.type}</td>
                  </tr>))}

              </tbody>
            </Table>
          </div>
          <div>
            <h2>Users</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => (<tr>
                    <td>{index + 1}</td>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>))}

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin