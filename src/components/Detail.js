import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link} from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap';
import { Button } from 'reactstrap';

const Detail = (props) => {
    const [game, setGame] = useState([]);
    const{id} = useParams(); 

    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games/" + id)
            .then( res => {
                console.log(res.data.data);
                setGame(res.data.data);
    })
            .catch( err => console.log(err) )
    }, []);

    return (
        <div className='d-flex flex-wrap mt-5'>
            <div className='mx-auto'>
                <Card style={{
                    width: '30rem',
                    boxShadow: "7px 7px 7px gray"
                    }}>
                    <CardHeader tag="h2">Game Details</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">{game.name}</CardTitle>
                        <CardText>{game.description}</CardText>
                        <CardText>Developer: {game.developer}</CardText>
                        <CardText>Publisher: {game.publisher}</CardText>
                        <CardText>Release Date: {game.released_date}</CardText>
                        <Button color='success'>
                            <Link style={{
                                color:"white",
                                textDecoration: "none"
                                }} to={"/"}>Home</Link>
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
export default Detail;

