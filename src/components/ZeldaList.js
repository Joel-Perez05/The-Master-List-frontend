import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import io from "socket.io-client";
import { Button, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
// import "./ZeldaForm.css"
import background from "../images/triforce.jpg";


const ZeldaList = (props) => {
    const [userLists, setUserLists] = useState([]);
    const [socket] = useState(() => io(":8000"));

    useEffect(()=>{
        socket.on("connection", () => {
            console.log("connected");
        })
        axios.get("http://localhost:8000/api/lists")
        .then((res)=>{
            console.log(res.data);
            setUserLists(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        return () => socket.disconnect(true);
    }, [socket]);

    const deleteList = (listId) => {
        // axios.delete('http://localhost:8000/api/lists/' + listId)
        //     .then((res) => {
        //         console.log(res.data);
        //         const remainingLists = userLists.filter((list) => {
        //             return list._id !== listId
        //         });
        //         setUserLists(remainingLists);
        //     })
        //     .catch(err => console.log(err))
        socket.emit("deleteList", listId);
    };

    socket.on("listDeleted", (deletedId) => {
        setUserLists(userLists.filter((list) => list._id !== deletedId));
    })

    return (
        <div className='d-flex flex-wrap mt-5'>
            {
                userLists.map((list) => {
                    return (
                            <Card className='mx-auto mt-4 border-dark' style={{
                                width: '24rem',
                                boxShadow: "7px 7px 7px gray"
                                }}>
                                <img style={{
                                    height: "250px"
                                }} alt="triforce" src={background}/>
                                <CardBody>
                                    <ListGroup flush>
                                        <ListGroupItem>Username: {list.username}</ListGroupItem>
                                        <ListGroupItem>First Game: {list.firstGame}</ListGroupItem>
                                        <ListGroupItem>Second Game: {list.secondGame}</ListGroupItem>
                                        <ListGroupItem>Third Game: {list.thirdGame}</ListGroupItem>
                                        <ListGroupItem>Fourth Game: {list.fourthGame}</ListGroupItem>
                                        <ListGroupItem>Fifth Game: {list.fifthGame}</ListGroupItem>
                                    </ListGroup>
                                    <Button color='danger' onClick={(e) => {deleteList(list._id)}}>Delete</Button>
                                    <Button className='ms-4' color='success'>
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "white"
                                        }} to={`/zelda/list/edit/${list._id}`}>Edit</Link>
                                    </Button>
                                </CardBody>
                            </Card>
                    )
                })
            }
        </div>
    );
};
export default ZeldaList;