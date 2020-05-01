import React from 'react';
import { Title, Text } from '../Texts'
import { Container, BoxContent } from './Main.styles';

export default function Main() {
  return (
    <Container>
      <div style={{ width: '15%', position: 'relative', top: '20%' }}>
        <img src="/images/outline-circle.png" alt="purple-outline-circle" title="purple-outline-circle" />
      </div>
      <BoxContent>
        <Title>
          Hello
          <span style={{fontSize: 68, color: '#9177FF'}}>. </span>
          <br /> I am <br /> Felipe Leal
        </Title>
        <Text
          style={{
            position: 'relative',
            top: '130px',
            right: '145px',
            height: '100%'
          }}>
            Web &amp; <br />Mobile <br/>Developer
        </Text>
      </BoxContent>
      <div style={{ width: '15%', textAlign: 'end', position: 'relative', bottom: '15%' }}>
        <img src="/images/circle.png" alt="purple-circle" title="purple-circle" />
      </div>
    </Container>
  );
}
