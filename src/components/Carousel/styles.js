import styled from 'styled-components';

export const Title = styled.h3`
  background: ${({ bgColor }) => `${bgColor}`};
  border-radius: 4px;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin: 16px 0 16px;

  padding: 20px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  
  text-decoration: none;
  transition: opacity .3s;
  display: block;
  @media (max-width: 800px) {
    
    margin-bottom: 16px;
    
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  text-align: center;
  &:nth-of-type(odd) {
    background: var(--gray);
  }
`;
