import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Label, Button } from 'reactstrap';
import background from "../images/crest.jpg";

const ZeldaForm = (props) => {
    const [username, setUsername] = useState(""); 
    const [firstGame, setFirstGame] = useState("");
    const [secondGame, setSecondGame] = useState("");
    const [thirdGame, setThirdGame] = useState("");
    const [fourthGame, setFourthGame] = useState("");
    const [fifthGame, setFifthGame] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/lists', {
            username,    
            firstGame,
            secondGame,
            thirdGame,
            fourthGame,
            fifthGame,   
        })
            .then(res=>{
                console.log(res.data); 
                navigate("/zelda/lists");
            })
            .catch((err) => {
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
            })
    }   


    
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh"
            }}>
        <div className='col-5 mx-auto p-5 text-light'>
        <form onSubmit={onSubmitHandler}>
            <h2>Create Top 5 Zelda Games List!!!</h2>
            <p>
                <Label for="username">User Name</Label><br/>
                <Input type="text" onChange = {(e)=>setUsername(e.target.value)}/>
                {errors.username && <p className='text-danger mt-3'>{errors.username.message}</p> }
            </p>
            <p>
            <Label for="first_game">First Game</Label><br/>
                <Input type="text" onChange = {(e)=>setFirstGame(e.target.value)}/>
                {errors.firstGame && <p className='text-danger mt-3'>{errors.firstGame.message}</p> }
            </p>
            <p>
                <Label for="second_game">Second Game</Label><br/>
                <Input type="text" onChange = {(e)=>setSecondGame(e.target.value)}/>
                {errors.secondGame && <p className='text-danger mt-3'>{errors.secondGame.message}</p> }
            </p>
            <p>
                <Label for="third_game">Third Game</Label><br/>
                <Input type="text" onChange = {(e)=>setThirdGame(e.target.value)}/>
                {errors.thirdGame && <p className='text-danger mt-3'>{errors.thirdGame.message}</p> }
            </p>
            <p>
                <Label for="fourth_game">Fourth Game</Label><br/>
                <Input type="text" onChange = {(e)=>setFourthGame(e.target.value)}/>
                {errors.fourthGame && <p className='text-danger mt-3'>{errors.fourthGame.message}</p> }
            </p>
            <p>
                <Label for="fifth_game">Fifth Game</Label><br/>
                <Input type="text" onChange = {(e)=>setFifthGame(e.target.value)}/>
                {errors.fifthGame && <p className='text-danger mt-3'>{errors.fifthGame.message}</p> }
            </p>
            <Button color='success'>Submit</Button>
        </form>
        </div>
        </div>
    )
}
export default ZeldaForm;

