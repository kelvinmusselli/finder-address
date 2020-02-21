import React from 'react';

import { Container, AlignImageAndText, Image, Text } from './styles';
import logo from '../../assets/images/magalu.jpg';

function Header() {
  return (
    <Container>
      <AlignImageAndText>
        <Image>
          <img src={logo} alt="magalu" />
        </Image>
        <Text>Magalu Finder</Text>
      </AlignImageAndText>
    </Container>
  );
}

export default Header;
