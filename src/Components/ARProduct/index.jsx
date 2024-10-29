import styled from "styled-components";

const ProductDiv = styled.div`
    border-radius: 12px;
    height: 390px;
    display: flex;
    overflow: hidden;
    min-width: 20%;
    box-sizing: border-box;
    margin: 10px;
`

const Logo = styled.img`
    width: 100%;
    overflow: hidden;
`

const ARProduct = ({logo}) => {
    return(
        <ProductDiv>
            <Logo src={logo} />
        </ProductDiv>
    )
}

export default ARProduct;