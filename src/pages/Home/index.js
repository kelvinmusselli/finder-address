import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header/index';
import Search from '../../components/Search/index';
import Maps from '../../components/Maps/index';

function Home() {
  return (
    <Container>
      <Header />
      <Search />
      <Maps />
    </Container>
  );
}
export default Home;
