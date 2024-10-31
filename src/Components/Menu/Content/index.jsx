import styled from "styled-components";
import First from "./First";
import Solutions from "./Solutions";

const ContenteDiv = styled.div`
    width: 65vw;
    height: 100vh;
    background-color: #FFFFFF;
`

const Content = ({page}) => {
    return(
        <ContenteDiv>
            {page === 1 ? <First /> : <Solutions page={page} />}
        </ContenteDiv>
    )
}

export default Content;