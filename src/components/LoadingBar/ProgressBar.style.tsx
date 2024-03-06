import ProgressProps from "@/components/LoadingBar/ProgessBar.type";
import styled from "styled-components";

const ProgressBar = styled.div<ProgressProps>`
    width: 150px;
    height: 20px;
    border: 1px solid white;
    
    span {
        display: block;
        position: relative;
        width: ${({percentage}) => percentage}%;
        height: 100%;
        background-color: #6dca6d;
        transition: .3s ease-in-out;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            background-size: 100%;
            background-image: linear-gradient(45deg, #fff 25%, 
                                            rgba(0, 0, 0, 0) 25%,
                                            rgba(0, 0, 0, 0) 50%,
                                            #fff 50%,
                                            #fff 75%,
                                            rgba(0, 0, 0, 0) 75%,
                                            rgba(0, 0, 0, 0));
            background-size: 20px 20px;
            opacity: 0.5;
            animation: pogress-bar-after 1s infinite linear
        }
    }

    @keyframes pogress-bar-after {
        0% {
            background-position: 0 100%;
        }

        100% {
            background-position: 20px 100%;
        }
    }

`

export default ProgressBar;