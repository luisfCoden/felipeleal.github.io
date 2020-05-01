import React from 'react';
import { TitleInfo, Underline } from './styles';

const Title = (props) => {
  return (
    <TitleInfo
      size={props.size}
      font={props.font}
      style={props.style}
      color={props.color}
      weight={props.weight}
    >
      { props.children }
      { props.underline  && (
        <Underline />
      )}
    </TitleInfo>
  );
}

export default Title;