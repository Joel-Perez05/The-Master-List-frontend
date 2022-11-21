import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import { Input, Label, Button } from 'reactstrap';

const Update = (props) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const { id } = useParams(); 
    const [username, setUsername] = useState("");
    const [firstGame, setFirstGame] = useState("");
    const [secondGame, setSecondGame] = useState("");
    const [thirdGame, setThirdGame] = useState("");
    const [fourthGame, setFourthGame] = useState("");
    const [fifthGame, setFifthGame] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/lists/' + id)
            .then(res => {
                console.log(res.data)
                setUsername(res.data.username);
                setFirstGame(res.data.firstGame);
                setSecondGame(res.data.secondGame);
                setThirdGame(res.data.thirdGame);
                setFourthGame(res.data.fourthGame);
                setFifthGame(res.data.fifthGame);
            })
            .catch(err => console.log(err))
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/lists/' + id, {
            username,    
            firstGame,
            secondGame,
            thirdGame,
            fourthGame,
            fifthGame      
        })
            .then(res => {
                console.log(res.data);
                navigate("/zelda/lists");
            })
            .catch((err) => {
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
            })
    }
    return (
        <div className='FormGroup'>
            <form className='mx-auto col-5 mt-5' onSubmit={onSubmitHandler}>
                <h2 className={`text ${darkMode ? "text-light" : "text-dark"}`}>Edit Top 5 List!!!</h2>
                <p>
                    <Label className={`text ${darkMode ? "text-light" : "text-dark"}`} for="username">User Name</Label><br/>
                    <Input value={username} type="text" onChange = {(e)=>setUsername(e.target.value)}/>
                    {errors.username && <p className='text-danger mt-3'>{errors.username.message}</p> }
                </p>
                <p>
                    <Label className={`text ${darkMode ? "text-light" : "text-dark"}`} for="first_game">First Game</Label><br/>
                    <Input value={firstGame} type="text" onChange = {(e)=>setFirstGame(e.target.value)}/>
                    {errors.firstGame && <p className='text-danger mt-3'>{errors.firstGame.message}</p> }
                </p>
                <p>
                    <Label className={`text ${darkMode ? "text-light" : "text-dark"}`} for="second_game">Second Game</Label><br/>
                    <Input value={secondGame} type="text" onChange = {(e)=>setSecondGame(e.target.value)}/>
                    {errors.secondGame && <p className='text-danger mt-3'>{errors.secondGame.message}</p> }
                </p>
                <p>
                    <Label className={`text ${darkMode ? "text-light" : "text-dark"}`} for="third_game">Third Game</Label><br/>
                    <Input value={thirdGame} type="text" onChange = {(e)=>setThirdGame(e.target.value)}/>
                    {errors.thirdGame && <p className='text-danger mt-3'>{errors.thirdGame.message}</p> }
                </p>
                <p>
                    <Label className={`text ${darkMode ? "text-light" : "text-dark"}`} for="fourth_game">Fourth Game</Label><br/>
                    <Input value={fourthGame} type="text" onChange = {(e)=>setFourthGame(e.target.value)}/>
                    {errors.fourthGame && <p className='text-danger mt-3'>{errors.fourthGame.message}</p> }
                </p>
                <p>
                    <Label className={`text ${darkMode ? "text-light" : "text-dark"}`} for="fifth_game">Fifth Game</Label><br/>
                    <Input value={fifthGame} type="text" onChange = {(e)=>setFifthGame(e.target.value)}/>
                    {errors.fifthGame && <p className='text-danger mt-3'>{errors.fifthGame.message}</p> }
                </p>
                <Button color='success'>Update</Button>
            </form>
        </div>
    )
}
export default Update;

