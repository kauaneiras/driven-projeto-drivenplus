import styled from "styled-components";
import Plan1 from "../../Images/Plan1.png";
import Plan2 from "../../Images/Plan2.png";
import Plan3 from "../../Images/Plan3.png";

export default function Subscriptions() {
    console.log("Subscriptions => OK");

    return (
        <Container>
            <Center>
                <PlanTitle>Escolha seu Plano</PlanTitle>
                    <PlanBox>
                        <DrivenPlanImg src={Plan1} alt=""/>
                        <Price>R$ 39,99</Price>
                    </PlanBox>
                    <PlanBox>
                        <DrivenPlanImg src={Plan2} alt=""/>
                        <Price>R$ 69,99</Price>
                    </PlanBox>
                    <PlanBox>
                        <DrivenPlanImg src={Plan3} alt=""/>
                        <Price>R$ 99,99</Price>
                    </PlanBox>
            </Center>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    background: #0E0E13;
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
const PlanTitle = styled.p`
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 22px;
    margin-bottom: 10px;
`
const PlanBox = styled.div`
    width: 100%;
    height: 180px;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    display: flex;
    flex-direction: line;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`
const DrivenPlanImg = styled.img`
    height: 95px;
    width: auto;
    margin-right: 20px;
`
const Price = styled.p`
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`