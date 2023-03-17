import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert2'


function Booking() {
    const [room, setAllrooms] = useState([])
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    const [totalDays, setTotalDays] = useState(null);
    const [totalamount, setTotalamount] = useState();
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const handleFromDateChange = (event) => {

        setFromDate(new Date(event.target.value));

    };

    const handleToDateChange = (event) => {
        setToDate(new Date(event.target.value));
    };

    const handleCalculateDays = () => {
        if (fromdate && todate) {
            const timeDiff = todate.getTime() - fromdate.getTime();
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24) + 1);
            setTotalDays(daysDiff);
        }
    };
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    useEffect(() => {

        const fetchData = async () => {
            try {

                const result = (await axios.post('http://localhost:8000/api/rooms/getroom/' + id))
                setTotalamount(result.data.rentperday * totalDays)
                setAllrooms(result.data)
                // console.log(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id, totalDays, totalamount])

    async function onToken(token) {
        const bookingDetails = {
            room,
            // userid:JSON.parse(localStorage.getItem('currentUser')).id,
            fromdate,
            todate,
            totalamount,
            totalDays,
            token
        }

        try {
            const result = await axios.post('http://localhost:8000/api/bookings/bookroom', bookingDetails)
        } catch (error) {
            swal.fire('Congratulations', 'Your Room Booked Successfully', 'success')
        }
    }
    return (
        <div>
            <div className='row' style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 1.35) 0px 5px 15px', margin: '60px' }}>
                <div className='col-md-5'>
                    <div style={{ float: 'right', padding: '40px' }}>
                        <h1>Booking Details</h1>
                        <hr />
                        <p>Name: <b>{user.data.name}</b> </p>
                        <p>
                            From Date: <b>{formatter.format(fromdate)}</b>
                        </p>
                        <p>
                            To Date: <b>{formatter.format(todate)}</b>
                        </p>
                        <p>Room Name: <b>{room.name}</b></p>
                        <p>Address: <b>{room.address}</b></p>
                        <p>Max count: <b>{room.maxcount}</b></p>
                        <h1>Amount</h1>
                        <hr />
                        <p>Total Days: <b>{totalDays}</b></p>
                        <p>Rent per day: <b>{room.rentperday}</b></p>
                        <p>Total Amount: <b>{totalamount}</b></p>


                        <StripeCheckout
                            amount={totalamount * 100}
                            token={onToken}
                            currency='INR'
                            stripeKey="pk_test_51Mi71wSJCzrTr9U45qNcq0lOq2zERlfkKAOz8A1NhjHLTDGuCmQaHC7JZnbJYemNAMjO0IkiVhe2UmfazfqDYlmj00V3LspeVu"
                        >
                            <button className='btn btn-dark'>Pay Now {''}</button>
                        </StripeCheckout>
                        <Link to='/'><button className='btn btn-dark ms-5'>Back</button></Link >

                    </div>
                </div>
                <div className='col-md-5 text-center' style={{ marginTop: '200px' }}>
                    <form className='grid1 text-center'>
                        <label>
                            From Date:
                            <input type="date" onChange={handleFromDateChange} />
                        </label>
                        <label>
                            To Date:
                            <input type="date" onChange={handleToDateChange} />
                        </label>
                        <button type='button' onClick={handleCalculateDays} className='text-center'>Click Me</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Booking