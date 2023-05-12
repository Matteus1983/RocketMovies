import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom: solid;
    border-color: ${({ theme }) => theme.COLORS.BORDER};

    padding: 24px 80px;
`
export const Profile = styled.div`
    display: flex;
    gap: 64px;
    justify-content: space-between;
    align-items: center;

    h1 {
         color: ${({ theme }) => theme.COLORS.PINK};
         font-weight: 700;
         font-size: 24px;
         line-height: 31px;
    }

    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    .profile {
        display: flex;
        flex-direction: row-reverse;
        margin-left: 9px;
        line-height: 18px;
        align-items: center;
        gap: 10px;

       button {
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background: none;
        border: none;
        }

        strong {
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 700;
        }

        .dates {
            display: flex;
            flex-direction: column;
            align-items:end;
            width: 100px;
        }

    }
`