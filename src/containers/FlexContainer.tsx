"use client"

import styled from "styled-components";

const FlexContainerSpaceBTW = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FlexContainerCenter = styled.main`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export { FlexContainerSpaceBTW, FlexContainerCenter };