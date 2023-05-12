import styled from "styled-components";

export const Container = styled.section`
    margin: 56px 0px 28px;

    .title {
        display: flex;
        align-items: center;
        gap: 10px;

        >img {
            height: 20px;
            width: 130px;
        }

        >h2 {
        font-size: 36px;
        line-height: 47px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    }
    .time {
        margin: 15px 0px;
        display: flex;
        align-items: center;
        gap: 10px;
        >img {
            height: 20px;
            width: 20px;
            border-radius: 50%;
        }
        >div {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        svg {
            color: ${({ theme }) => theme.COLORS.PINK}
        }
    }
`