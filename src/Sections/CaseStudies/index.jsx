import { useState, useEffect } from "react";
import styled from "styled-components";
import { CaseItems } from "../../Assets/CaseItems";
import ARProduct from "../../Components/ARProduct";

const CaseDiv = styled.div`
    min-height: calc(60vh - 100px);
    background-color: #0A0A37;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    padding: 0 60px 50px;
    color: #FFFFFF;
`

const CaseText = styled.p`
    font-family: SF Pro Display;
    letter-spacing: 0.03em;
    font-size: 40px;
    font-weight: 600;
    padding-top: 10px;
    text-align: left;
    text-align: center;
    margin-bottom: 20px;
`

const CaseWrapper = styled.div`
    max-width: 100%;
    width: 1600px;
    overflow: hidden;

    @media (max-width: 1024px) {
        max-width: 100%;
    }

    @media (max-width: 600px) {
        max-width: 800px;
    }
`

const Cases = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transition: transform 0.5s ease;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 33.333}%)`};
    box-sizing: border-box;
`

const Case = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const duplicatedItems = [...CaseItems, ...CaseItems];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex === CaseItems.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
          }, 500);
        }
      }, [currentIndex]);

    return(
        <CaseDiv>
            <CaseText>
                Case Studies
            </CaseText>
            <CaseWrapper>
                <Cases currentIndex={currentIndex} style={{ transition: isTransitioning ? 'transform 0.5s ease' : 'none' }}>
                    {duplicatedItems.map((item, index) => 
                        <ARProduct key={index} logo={item.image} items={3} text={item.text}/>
                    )}
                </Cases>
            </CaseWrapper>
        </CaseDiv>
    )
}

export default Case;