import styled from "styled-components";

const NewsDiv = styled.div`
    color: #FFFFFF;
`

const Image = styled.img`
    width: 100%;
    border-radius: 15px;
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-align: left;
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.035em;
    margin-bottom: 0px;
`

const News = ({image, title, text}) => {
    return(
        <NewsDiv>
            <Image src={image} />
            <Title>{title}</Title>
            <Text>{text}</Text>
        </NewsDiv>
    )
}

export default News;