import { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { MainContext } from "../../Context/MainContext";

const CTADiv = styled.div`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
    width: 100%;
`

const Text = styled.div`
    color: #302C8C;
    font-size: 2em;
    text-align: left;
    padding: 0 15%;

    @media (max-width: 1024px) {
        padding: 0 10%;
        font-size: 1.5em;
    }

    @media (max-width: 600px) {
        padding: 0 5%;
        font-size: 1em;
    }
`

const CTA = () => {
    const sectionRef = useRef(null);
    const { addWhiteSectionRef } = useContext(MainContext);

    useEffect(() => {
        addWhiteSectionRef(sectionRef.current);
    }, [addWhiteSectionRef]);

    return (
        <CTADiv ref={sectionRef}>
            <Text>
                The way businesses and consumers shop has radically changed. Discover how top brands across multiple industries deliver an excellent digital-first customer experience with Tulfa.
            </Text>
        </CTADiv>
    )
}

export default CTA;