import styled from 'styled-components';

export const TextInfo = styled.p`
  margin: 5px;
  padding: 0;
  color: ${props => props.color ? props.color : '#1d2026'};
  font-size: ${props => props.size ? `${props.size}px` : '18px'};
  font-weight: ${props => props.weight ? props.weight : 'lighter'};
  font-family: ${props => props.font ? props.font : 'Avenir'};
`;

export const TitleInfo = styled.h1`
  /* margin: 5px;
  padding: 0; */
  color: ${props => props.color ? props.color : '#1d2026'};
  font-size: ${props => props.size ? `${props.size}px` : '68px'};
  font-weight: ${props => props.weight ? props.weight : 'Black'};
  font-family: ${props => props.font ? props.font : 'Avenir'};
  border-bottom-width: ${props => props.underline ? '8px' : 0};
  border-bottom-color: ${props => props.underline ? '#9177FF' : 'none'};
`;

export const Underline = styled.div`
  width: 100px;
  height: 8px;
  background: #9177FF;
  border-radius: 10px;
`;