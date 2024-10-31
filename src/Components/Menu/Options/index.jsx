import styled from "styled-components";

const OptionsDiv = styled.div`
    background-color: #FFFFFF;
    height: 100vh;
    width: ${({mobile}) => mobile === 'true' ? '100vw' : '35vw'};
    box-shadow: 5px 0 10px 5px rgba(0, 0, 0, 0.6);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    height: 95%;
    padding: 0 45%;

    p{
        color: #151568;
        font-family: SF Pro Display;
        font-size: 44.06px;
        font-weight: 600;
        text-align: left;
        margin: 0;
        width: -webkit-fill-available;
        white-space: nowrap;
        margin-left: -50%;
        @media (max-width: 600px) {
            margin-left: -150%;
        }
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-left: auto;
    justify-content: flex-end;
`

const P = styled.p`
    font-family: SF Pro Display;
    font-size: 13.22px;
    font-weight: 700;
    text-align: left;
    color: ${({page}) => page === 'true' ? '#6358E7' :  '#151568'};
    margin-right: 50px;
`

const Options = ({mobile, page, setPage}) => {

    return(
        <OptionsDiv mobile={mobile.toString()}>
            <Container>
                <P onClick={() => setPage(2)} page={(page == 2).toString()}>Solutions</P>
                <P>Industries</P>
                <P>Insights</P>
                <P>About Us</P>
                <P>Career</P>
            </Container>
            <Footer>
                <p>OUR WORK</p>
                <p>BOOK A CONSULTATION</p>
            </Footer>
        </OptionsDiv>
    )
}

export default Options;