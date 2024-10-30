import { useState, useEffect } from "react";
import styled from "styled-components";
import { CompaniesItems } from "../../Assets/CompaniesItems";
import ARProduct from "../../Components/ARProduct";

const CompaniesDiv = styled.div`
    min-height: calc(60vh - 100px);
    background-color: #151568;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    padding: 60px;
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
    max-width: 100%;
    width: 1600px;
    overflow: hidden;
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
      }, [currentIndex]);

    return(
        <CompaniesDiv>
            <CompaniesText>
                Trusted by top Fortune 500 clients from around the world
            </CompaniesText>
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