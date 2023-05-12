import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    'header'
    'content';
    
    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;
        
        /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
        /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK}; 
      border-radius: 10px;
    }

    p {
        font-size: 16px;
        line-height: 21px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: justify;
    }
    }
`

export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

`


