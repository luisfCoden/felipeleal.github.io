import React from "react";
import styled from "styled-components";
import { Text } from '../../Texts'

const MenuItem = styled.a`
  cursor: pointer;
  p:hover {
    color: #9177FF;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin: 5px 10px;
`;

const Item = (props) => {
  return (
    <ListItem>
      <MenuItem href={props.link}>
        <Text>{props.title}</Text>
      </MenuItem>
    </ListItem>
  );
}

export default Item;