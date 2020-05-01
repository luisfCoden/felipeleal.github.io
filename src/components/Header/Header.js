import React from "react"
import { Item } from './Item';
import { Text } from '../Texts';
import PropTypes from "prop-types";
import { FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import { Menu, Col, Items, PhoneNumber  } from './Header.styles';

const Header = () => (
  <Menu>
    <Col>
      <img
        style={{ width: 80, height: 50 }}
        src="/images/felipe-leal-logo.png"
        alt="Felipe Leal Logo"
        title="Felipe Leal"
      />
      <Items>
        <Item title="Home" href="#home" />
        <Item title="About" href="#about" />
        <Item title="Work" href="#work" />
        <Item title="Contact" href="#contact" />
      </Items>
    </Col>
    <Col>
      <Text>Call me: {' '}</Text>
      <PhoneNumber>
        <Text color={'#9177FF'}>+55 31 9 9761-0524</Text>
      </PhoneNumber>
      <FacebookFilled style={{ fontSize: 20, margin: 10 }} />
      <LinkedinFilled style={{ fontSize: 20 }} />
    </Col>
  </Menu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
