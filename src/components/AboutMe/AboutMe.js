import React from 'react';
import { Title, Text } from '../Texts'
import { Container, Col, BoxTitle, BoxText } from './AboutMe.styles';

export default function AboutMe() {
  return (
    <Container>
      <Col>
        <BoxTitle>
          <Title size={'48'} weight={'black'} underline>about me</Title>
        </BoxTitle>
        <BoxText>
          <Text size={'28'} weight={'lighter'}>
          Lorem ipsum diam rhoncus pellentesque sollicitudin inceptos eget 
          lacinia, ligula massa  dictum fringilla fusce aliquam bibendum 
          posuere sit, tincidunt rhoncus cursus et luctus scelerisque cursus. 
          consequat ullamcorper tincidunt litora praesent quis semper dui 
          inceptos scelerisque, habitasse vestibulum cursus nostra sem augue 
          porttitor arcu vel.
          </Text>
        </BoxText>
      </Col>
      <Col>
        <img
          style={{ width: '90%', height: 'auto' }}
          src="/images/about-me.png"
          alt="Luis Felipe Leal - @lealluisf"
          title="Luis Felipe Leal - - @lealluisf"
        />
      </Col>
    </Container>
  );
}
