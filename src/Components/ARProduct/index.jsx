import styled from "styled-components";

const ProductDiv = styled.div`
    height: 100%;
    display: flex;
    overflow: hidden;
    min-width: ${props => props.items ? `calc(100% / ${props.items})` : 'calc(100% / 5)' }; /* Ajusta a largura para caber exatamente 5 itens */
    box-sizing: border-box;
    padding: 0 10px;
    flex-direction: column;
    font-family: SF Pro Display;
    letter-spacing: 0.03em;
`

const Logo = styled.img`
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
`
const Text = styled.p`
    font-weight: 600;
    font-size: 18px;
    text-align: center;
`

const ARProduct = ({logo, items, text}) => {
    return(
        <ProductDiv items={items}>
            <Logo src={logo} />
            {text && <Text>{text}</Text>}
        </ProductDiv>
    )
}

export default ARProduct;