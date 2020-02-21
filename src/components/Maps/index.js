import React from 'react';

import { Container, DivSearched, AddressRequested, DivMap } from './styles';

function Maps({ address, logradouro, bairro, cep, localidade }) {
  console.log(logradouro);
  console.log(cep);

  return (
    <Container>
      <DivSearched>
        <AddressRequested>{logradouro}</AddressRequested>
        <AddressRequested>{bairro}</AddressRequested>
        <AddressRequested>{localidade}</AddressRequested>
        <AddressRequested>{cep}</AddressRequested>
      </DivSearched>
      <DivMap>
        <iframe
          className="result-map"
          title="map"
          scrolling="no"
          width="100%"
          height="100%"
          src={`https://www.google.com.br/maps?q=${cep},%20Brasil&output=embed`}
        />
      </DivMap>
    </Container>
  );
}

export default Maps;
