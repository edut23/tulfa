import { useState, useEffect } from "react";
import styled from "styled-components";
import { CaseItems } from "../../Assets/CaseItems";
import ARProduct from "../../Components/ARProduct";
import { MaterialSymbol } from "react-material-symbols";

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

const Arrows = styled.div`
    position: absolute;
    z-index: 1;
    width: -webkit-fill-available;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    margin-top: 14%;
    padding: 0 60px;

    @media (max-width: 1400px) {
        margin-top: 18%;
        padding: 0 25px;
    }


    .material-symbols{  
        background-color: #00000000;
        border: none;

        @media (max-width: 1023px) {
            color: #00000000 !important;
        }
    }

    .left{
        transform: scaleX(-1);
    }
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
            <Arrows>
                <MaterialSymbol onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)} className="left" color="#C4C4C4" size={30} icon="arrow_forward_ios" />
                <MaterialSymbol onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)} size={30} color="#C4C4C4" icon="arrow_forward_ios" />
            </Arrows>
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