import React, { useState } from 'react';

import { Container } from './styles';

function Home() {
  const [address, setAddress] = useState(['Rua sergio negri']);

  return (
    <Container>
      <ul>
        {address.map(a => (
          <li>{a}</li>
        ))}
      </ul>
    </Container>
  );
}
export default Home;
