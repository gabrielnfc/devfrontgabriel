import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    position: fixed;
    inline-size: 100vw;
    inset-block-end: 0;
    padding: 5px;
    color: var(--color-white);
    inset-block-end: 0px;
    letter-spacing: 0.1em;
    justify-content: space-around;
    align-items: center;
    font-size: small;
    p {
        font-size: small;
        font-family: 'Centra', sans-serif !important;
        text-decoration: none;
    }
    span {
        cursor: pointer;
        font-size: small;
        font-family: 'Centra', sans-serif !important;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            color:#f2f3f2;
        }
    }
`;

function Footer() {
    return (
    <StyledFooter>
        <p>&copy;2023. Made by <span href="https://github.com/gabrielnfc" target="_blank" > Gabriel Nascimento </span></p>
    </StyledFooter>
    );
}

export default Footer;
