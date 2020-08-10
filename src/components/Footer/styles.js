import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid transparent;
  border-image: linear-gradient(45deg, #1a75ff 12%, var(--primary) 35%, var(--primary) 50%, pink 100%);
  border-image-slice: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Autor = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
