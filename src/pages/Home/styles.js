import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px 132px auto;
    grid-template-areas: 
    'header'
    'options'
    'content';

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
`;
export const Options = styled.div`
    grid-area: options;
    display: flex;
    justify-content: space-between;
    padding: 24px 80px;

    h2 {
        font-size: 32px;
        line-height: 42px;
        color:${({ theme }) => theme.COLORS.WHITE}
    }

    button {
        display: flex;
        align-items: center;
        height: 48px;
        width: 207px;
        justify-content: center;
        border-radius: 8px;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
        gap: 8px;
        font-size: 16px;
        line-height: 21px;
    }
`;
export const Content = styled.div`
    grid-area: content ;
    width: 100%;
    padding: 0px 80px;
    overflow-y: auto;

        /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
        /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK}; 
      border-radius: 10px;
    }
    
`;
