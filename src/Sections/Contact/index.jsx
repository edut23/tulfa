import styled from "styled-components"
import footer from "../../Assets/footer.png"

const ContactDiv = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    width: 100%;
    
    @media (max-width: 600px) {
        width: 800px;
    }
`

const Contact = () => {
    return(
        <ContactDiv>
            <Image src={footer} />
        </ContactDiv>
    )
}

export default Contact;