import styled from 'styled-components';

export const Menu = styled.header`
  /* width: 100%; */
  height: 50px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-around;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const PhoneNumber = styled.a`
  cursor: pointer;
  p:hover {
    text-decoration: underline;
  }
`;
