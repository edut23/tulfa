import styled from "styled-components";
import solution from "../../../../Assets/SolutionsBG.png";
import linksSolutions from "../../../../Assets/LinksSolutions.png";
import { useEffect, useState } from "react";

const SolutionsDiv = styled.div`
    padding: 15% 10%;
    background-image: url(${({imgBg}) => imgBg});
    background-color: #6358E7;
    height: 100vh;
`
const Links = styled.img``

const Solutions = ({page}) => {
    const [img, setImg] = useState('');
    const [items, setItems] = useState('');

    useEffect(() => {
        switch(page) {
            case 2:
                setImg(solution);
                setItems(linksSolutions);
                break;
            default:
                setImg(solution);
                setItems(linksSolutions);
        }
    }, [page])

    return(
        <SolutionsDiv imgBg={img}>
            <Links src={items} />
        </SolutionsDiv>
    )
}

export default Solutions;