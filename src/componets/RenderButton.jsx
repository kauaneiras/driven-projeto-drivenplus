import { ThreeDots } from 'react-loader-spinner'
import styled from 'styled-components';

export default function RenderButton(props) {
    const { state, text } = props;
    if(state){
        return (<Loading/>)
    }
    if(!state){
        return (<p>{text}</p>)
    }
}

function Loading() {
    return (
        <Buttoncenter>
        <ThreeDots color="white" height={80}width={80}/>
        </Buttoncenter>
        )
}

const Buttoncenter = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`

