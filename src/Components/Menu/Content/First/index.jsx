import styled from "styled-components";

const FirstDiv = styled.div`
    padding: 20% 20%;
`

const Text = styled.div`
    font-family: SF Pro Display;
    font-size: 73.09px;
    font-weight: 600;
    text-align: left;
    color: #6358E7;
`

const Button = styled.button`
    margin-top: 40px;
    padding: 15px 20px;
    border-radius: 5px;
    background-color: #FF4729;
    font-family: SF Pro Display;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    border: none;
    width: fit-content;
`

const First = () => {
    return(
        <FirstDiv>
            <Text>
            Create unrivalled 
            shopping experiences 
            for your consumers
            </Text>
            <Button>
                BOOK A DEMO
            </Button>
        </FirstDiv>
    )
}

export default First;