import styled from "styled-components"
import footer from "../../Assets/footer.png"

const ContactDiv = styled.div`
    width: 100vw;
    height: auto;
`

const Image = styled.img`
    width: 100%;
`

const Contact = () => {
    return(
        <ContactDiv>
            <Image src={footer} />
        </ContactDiv>
    )
}

export default Contact;