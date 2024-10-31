import styled from "styled-components";
import { NewsItems } from "../../Assets/NewsItems";
import News from "../../Components/News";

const InfoDiv = styled.div`
    background-color: #151568;
    padding: 0 200px;
    font-family: SF Pro Display;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100vw;

    @media (max-width: 1024px) {
        padding: 10%
    }

    @media (max-width: 600px) {
        padding: 5%;
        display: flex;
    }
`

const InfoHeader = styled.div`
    color: #FFFFFF;
    font-family: SF Pro Display;
    letter-spacing: 0.03em;
    padding-top: 100px;
    text-align: center;
`

const Title = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
`

const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 50px;
`

const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap;
`

const OptionItem = styled.button`
    border-radius: 20px;
    padding: 10px 20px;
    background-color: #736DF9;
    border: none;
    color: #FFFFFF;
`
const NewsDiv = styled.div`
    display: grid;
    gap: 20px;
    width: -webkit-fill-available;
    justify-items: center;
    margin-bottom: 66px;

    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 5%;
    }
`

const Button = styled.button`
    padding: 10px 40px;
    border-radius: 5px;
    background-color: #736DF9;
    font-family: SF Pro Display;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-align: center;
    color: #FFFFFF;
    border: none;
    width: fit-content;
    margin: 0 auto 64px;
`

const Info = () => {
    return(
        <InfoDiv>
            <InfoHeader>
                <Title>
                    Digital Transformation for All
                </Title>
                <Subtitle>
                    Find optimum and convenient ways to adapt to the trend-setting digital revolutions.
                </Subtitle>
                <Options>
                    <OptionItem>
                        3D Modeling
                    </OptionItem>
                    <OptionItem>
                        Augmented Reality
                    </OptionItem>
                    <OptionItem>
                        Product Imagery
                    </OptionItem>
                    <OptionItem>
                        Rich Media
                    </OptionItem>
                    <OptionItem>
                        Product Content
                    </OptionItem>
                </Options>
            </InfoHeader>
            <NewsDiv>
                {NewsItems && NewsItems.map((item) => 
                    <News image={item.image} title={item.title} text={item.text} />
                )}
            </NewsDiv>
            <Button>
                Load More
            </Button>
        </InfoDiv>
    )
}

export default Info;