import React from 'react';

import { Container, AlignImageAndText, Image, TextName } from './styles';
import logo from '../../assets/images/magalu.jpg';

function Header() {
  return (
    <Container>
      <AlignImageAndText>
        <Image>
          <img src={logo} alt="magalu" />
        </Image>
        <TextName>Magalu Finder</TextName>
      </AlignImageAndText>
    </Container>
  );
}

export default Header;
