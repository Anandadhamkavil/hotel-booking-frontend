import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Rooms({ room,fromdate,todate }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={room.imageurls[0]} />
                <Card.Body>
                    <Card.Title>{room.name}</Card.Title>
                    <Stack direction="horizontal" gap={2}>
                        <Card.Text>
                            <b>Type</b> : {room.type}
                        </Card.Text>
                        <Card.Text className='ms-auto mb-3'>
                            <b>Rent</b> : ₹{room.rentperday}
                        </Card.Text>
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
                        
                       <Link to={`/book/${room._id}`}> <Button variant="dark">Book Now</Button></Link>
                        <Button variant="dark" className='ms-auto' onClick={handleShow}>View Details</Button>
                    </Stack >
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={room.imageurls[0]}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className='text-danger'>{room.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={room.imageurls[1]}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={room.imageurls[2]}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <p className='mt-4'><b>Address</b>: {room.address}</p>
                    <p><b>Description</b>: {room.description}</p>
                    <p><b>Type</b>: {room.type}</p>
                    <p><b>Phone Number</b>: {room.phonenumber}</p>
                    <p><b>Rent</b>: {room.rentperday}</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Rooms