import React from 'react';
import { TextInfo } from './styles';

const Text = (props) => {
  return (
    <TextInfo
      size={props.size}
      font={props.font}
      style={props.style}
      color={props.color}
      weight={props.weight}
    >
      {props.children}
    </TextInfo>
  );
}

export default Text;