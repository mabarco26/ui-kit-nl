import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 0.75em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    
    ${(props) => {
        if (props.variant === 'primary') {
            return css`
            color: white;
            background-image: linear-gradient(to bottom left, #617cea, #617cea);
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
            `;
        }

        if (props.variant === 'secondary') {
            return css`
            color: white;
            background-image: linear-gradient(to bottom left, #617cea, #617cea);
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
            `;
        }

        if (props.size === 'small') {
            return css`
            font-size: 12px;
            padding: 12px 25px;
            `;
        }

        if (props.size === 'medium') {
            return css`
            font-size: 14px;
            padding: 15px 50px;
            `;
        }

        if (props.size === 'large') {
            return css`
            font-size: 16px;
            padding: 18px 75px;
            `;
        }
    }};
`;