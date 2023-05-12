import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    line-height: 21px;
    gap: 7px;
    border: none;
`