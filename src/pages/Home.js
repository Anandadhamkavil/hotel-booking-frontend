import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Carousel from 'react-bootstrap/Carousel';
import '../pages/Home.css'
// import Slide from './Slide';
import axios from 'axios'
import Rooms from './Rooms';
import { Row, Col } from 'react-bootstrap'
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [allrooms, setAllrooms] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [searchkey, setSearchkey] = useState('')
    const [type, setType] = useState('all')


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const result = await axios.get('http://localhost:8000/api/rooms/getallrooms')
                setAllrooms(result.data)
                setLoading(false)
            } catch (error) {
                setError(true)
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    function filterBySearch(){
        const temprooms = allrooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase()))
        setAllrooms(temprooms)
    }
    function filterByType(e){
        setType(e)
            const temprooms = allrooms.filter(room=>room.type.toLowerCase()==e.toLowerCase())
        setAllrooms(temprooms)
        
    }
    
    return (
        <>
            <Nav />
            <Carousel activeIndex={index} onSelect={handleSelect} href="#home">
                <Carousel.Item style={{ height: '100vh' }} className='mt-5'>
                    <img
                        className="d-block w-100"
                        src="https://www.hardrockhotels.com/files/5829/SHRC_Hollywood_Guitar03.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '100vh' }}>
                    <img
                        className="d-block w-100"
                        src="https://images.prestigeonline.com/wp-content/uploads/sites/6/2020/08/03122536/1.-Aleenta-Phuket-Main-Pool-hero-shot.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '100vh' }}>
                    <img
                        className="d-block w-100"
                        src="https://www.forbes.com/advisor/wp-content/uploads/2020/07/pexels-photo-258154-e1603866309719.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <section href="#about" className='about top'>
                <div className='container flex'>
                    <div className='_left'>
                        <div className='heading'>
                            <h1>WELCOME</h1>
                            <h2>WESTIN HOTEL</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus eveniet natus labore cumque sequi consectetur id quia blanditiis accusantium et magnam, quos, repudiandae nihil earum non in nisi iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus eveniet natus labore cumque sequi consectetur id quia blanditiis accusantium et magnam, quos, repudiandae nihil earum non in nisi iusto.</p>
                        <button className='primary-btn1'>
                            ABOUT US
                        </button>
                    </div>
                    <div className='_right'>
                        <img src='https://img.traveltriangle.com/blog/wp-content/uploads/2017/07/sinclair-1.jpg' alt='' />
                    </div>
                </div>
            </section>

            <section className='counter top'>
                <div className='container grid1'>
                    <div className='box'>
                        <h1>2500</h1>
                        <hr />
                        <span>Customer</span>
                    </div>
                    <div className='box'>
                        <h1>1250</h1>
                        <hr />
                        <span>Happy Customer</span>
                    </div>
                    <div className='box'>
                        <h1>150</h1>
                        <hr />
                        <span>Expert Technicians</span>
                    </div>
                    <div className='box'>
                        <h1>3550</h1>
                        <hr />
                        <span>Desktop Related</span>
                    </div>
                </div>
            </section>


            <section className='book mt-5'>
                <div className='content flex_space'>
                    <div className='text'>
                        <h1><span>Search </span><br></br>Your Rooms</h1>
                    </div>
                    <div className='form1 '>
                        <form className='grid1 '>
                            <input type='text' className='form-control' placeholder='Search Room' 
                            value={searchkey} onChange={(e)=>{setSearchkey(e.target.value)}} onKeyUp={filterBySearch}
                            />
                            <select className='selection' style={{borderRadius:'10px solid black',width:'100%'}} value={type} onChange={(e)=>{filterByType(e.target.value)}}>
                                <option value='all' >All</option>
                                <option value='delux' >Delux</option>
                                <option value='no delux' >No Delux</option>
                            </select>
                         </form>
                    </div>
                </div>
            </section>

            <section href="#rooms" className='rooms'>
                <div className='container top'>
                    <div className='heading'>
                        <h1>EXPLORE</h1>
                        <h2>Our Rooms</h2>
                        <p>Excepteur sint onnaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    <div className='content mtop'>
                        {/* <Slide/> */}
                        <Row>
                            {
                                allrooms.map((room) => (
                                    <Col direction="horizontal" gap={4}>
                                        <Rooms room={room}  />
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </div>
            </section>

            {/* <section className='gallery'>
                <div className='container top'>
                    <div className='heading'>
                        <h1>PHOTOS</h1>
                        <h2>Our Gallery</h2>
                        <p>Excepteur sint onnaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    <div className='content mtop'>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Home