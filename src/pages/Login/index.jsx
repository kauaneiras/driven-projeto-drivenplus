import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import LogoDriven from "../../Images/Logo.png";
import styled from 'styled-components';
import axios from 'axios';
import RenderButton from "../../componets/RenderButton";
import LoginData from "../../Contexts";


export default function Login(){

    const {setToken, setName, setPlan} = useContext(LoginData);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    function OnSubmit(){

        setDisabled(true);
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {email: email, password: password});
        promise.then(response => {
            console.log(`post login sucess email: ${email} password: ${password}`);
            setDisabled(false);
            setName(response.data.name);
            setToken(response.data.token);
            if(response.data.membership){
                setPlan(response.data.membership);
                navigate("/home");}
            else{navigate("/subscriptions")}
        })

        promise.catch((warning) => {
            alert("Algo deu errado. Não foi possível realizar seu login. Por favor, tente novamente.");
            setDisabled(false);
        })

    }

    function disable(a){
        if(disabled){return () => "";}
        else{return a;}
    }

    return (
        <Container>
            <Center>
                <Logo src={LogoDriven} alt="" />
                <Form onSubmit={OnSubmit}>
                    <Input disabled={disabled} type="email" placeholder="email" value={email} required onChange={disable((e) => setEmail(e.target.value))}/>
                    <Input disabled={disabled} type="password" placeholder="password" value={password} required onChange={disable((e) => setPassword(e.target.value))}/>
                <Button disabled={disabled} type="submit">
                    <RenderButton state={disabled} text="Entrar"/>
                </Button>
                </Form >
                    <Link to="/sign-up">
                        <GoTo>Não tem uma conta? Cadastre-se!</GoTo>
                    </Link>
            </Center>
        </Container>
    )
}
    
const Container = styled.div`
    position: relative;
    background: #0E0E13;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Center = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Logo = styled.img`
    margin-bottom: 100px;
    width: 100%;
    height: auto;
`
const Form = styled.form`   
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41 px;
    color: #7E7E7E;
    background: white;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 16px;
    padding-left: 14px;
`

const Button = styled.button`
    width: 100%;
    height: 40px;
    color: white;
    background: #FF4791;
    border: none;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41 px;
    margin-top: 24px;
    margin-bottom: 24px;
`
const GoTo = styled.p`   
    color: #52B6FF;
    margin-top: 20px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    text-decoration: underline;
`