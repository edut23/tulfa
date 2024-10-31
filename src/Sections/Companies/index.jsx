import { useState, useEffect } from "react";
import styled from "styled-components";
import { CompaniesItems } from "../../Assets/CompaniesItems";
import ARProduct from "../../Components/ARProduct";
import { MaterialSymbol } from "react-material-symbols";

const CompaniesDiv = styled.div`
    min-height: calc(60vh - 100px);
    background-color: #151568;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    padding: 60px;

    @media (max-width: 1024px) {
        padding: 10%
    }

    @media (max-width: 600px) {
        padding: 5%;
        display: flex;
    }
`

const CompaniesText = styled.p`
    color: #FFFFFF;
    font-family: SF Pro Display;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-align: left;
    padding-top: 100px;
    text-align: center;
    margin-bottom: 70px;
`

const ProductsWrapper = styled.div`
    max-width: 1600px;
    width: 1600px;
    overflow: hidden;

    @media (max-width: 600px) {
        max-width: 1200px;
    }
`

const Products = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transition: transform 0.5s ease;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 12.5}%)`};
    box-sizing: border-box;
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #736DF9;
    font-family: SF Pro Display;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-align: left;
    color: #FFFFFF;
    border: none;
    width: fit-content;
    margin-top: 50px;
`

const Arrows = styled.div`
    position: absolute;
    z-index: 1;
    width: -webkit-fill-available;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    margin-top: calc(25vh + 110px);
    padding: 0 60px;

    @media (max-width: 1600px) {
        margin-top: calc(35vh + 80px);
    }

    @media (max-width: 1024px) {
        margin-top: calc(45vh + 10px);
    }

    @media (max-width: 600px) {
        margin-top: calc(50vh + 80px);
    }

    .material-symbols{  
        background-color: #00000000;
        border: none;

        @media (max-width: 1100px) {
            color: #00000000 !important;
        }
    }

    .left{
        transform: scaleX(-1);
    }
`

const Companies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const duplicatedItems = [...CompaniesItems, ...CompaniesItems];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex === CompaniesItems.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
          }, 500);
        }
        else
            setIsTransitioning(true);
        
      }, [currentIndex]);

    return(
        <CompaniesDiv>
            <CompaniesText>
                Trusted by top Fortune 500 clients from around the world
            </CompaniesText>
            <Arrows>
                <MaterialSymbol onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)} className="left" color="#C4C4C4" size={30} icon="arrow_forward_ios" />
                <MaterialSymbol onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)} size={30} color="#C4C4C4" icon="arrow_forward_ios" />
            </Arrows>
            <ProductsWrapper>
                <Products currentIndex={currentIndex} style={{ transition: isTransitioning ? 'transform 0.5s ease' : 'none' }}>
                    {duplicatedItems.map((item, index) => 
                        <ARProduct key={index} logo={item.logo} items={8}/>
                    )}
                </Products>
            </ProductsWrapper>
            <Button>WHO WE WORK WITH</Button>
        </CompaniesDiv>
    )
}

export default Companies;