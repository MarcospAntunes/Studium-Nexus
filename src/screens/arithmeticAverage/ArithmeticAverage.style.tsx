import styled from "styled-components";

const ArithmeticAverageSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    text-align: justify;
    text-indent: 10px;

    h2 {
        text-indent: 0;
        margin-bottom: 0;
    }
    
    & h3 {
        font-size: 20px;
        text-align: center;
        text-indent: 0;
        width: 100%;
        margin: 0;
    }

    & p {
        max-width: 700px;
    }

    & ol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        max-width: 700px;
        text-align: left;
        list-style-position: inside;

        & li {
            width: 100%;
            text-indent: 0;
            font-size: 14px;

            & p {
                text-align: center;
            }
        }
    }

    
`

export default ArithmeticAverageSection;