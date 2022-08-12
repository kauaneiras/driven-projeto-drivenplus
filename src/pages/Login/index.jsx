import {Link} from "react-router-dom";
import ImgLogo from "../../Images/Logo.png";
import styled from 'styled-components';

export default function Login() {
    console.log("Login => OK");

    return (
        <Container>
            <Center>
                <Logo src={ImgLogo} alt="" />
                <Form>
                    <Input  type="email" placeholder="email" />
                    <Input type="password" placeholder="senha" />
                <Button type="submit">
                    <RenderButton  text="Entrar"/>
                </Button>
                </Form >
                    <Link to="/signup">
                        <GoTo>Não tem uma conta? Cadastre-se!</GoTo>
                    </Link>
            </Center>
        </Container>
    )

}

const RenderButton = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: pink;
`
    
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
const Form = styled.form
`   width: 100%;
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
const GoTo = styled.p
`   color: #52B6FF;
    margin-top: 20px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    text-decoration: underline;
`