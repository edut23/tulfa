import styled from "styled-components";

const ProductDiv = styled.div`
    height: 100%;
    display: flex;
    overflow: hidden;
    min-width: ${props => props.items ? `calc(100% / ${props.items})` : 'calc(100% / 5)' }; /* Ajusta a largura para caber exatamente 5 itens */
    box-sizing: border-box;
    padding: 0 10px;
`

const Logo = styled.img`
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
`

const ARProduct = ({logo, items}) => {
    return(
        <ProductDiv items={items}>
            <Logo src={logo} />
        </ProductDiv>
    )
}

export default ARProduct;