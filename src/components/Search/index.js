import React from 'react';
import { FaSearch } from 'react-icons/fa';

import {
  Container,
  DivAddres,
  LabelAddress,
  DivToSearch,
  InputSearch,
  DivSearched,
  AddressRequested,
  ButtonSearch,
} from './styles';

function Search() {
  return (
    <Container>
      <DivAddres>
        <LabelAddress>Pesquise seu endereço</LabelAddress>
        <DivToSearch>
          <LabelAddress>CEP:</LabelAddress>
          <InputSearch />
          <ButtonSearch>
            <FaSearch />
          </ButtonSearch>
        </DivToSearch>
      </DivAddres>
      <DivSearched>
        <AddressRequested>Rua Sergio Negri</AddressRequested>
        <AddressRequested>Bairro Fazenda Grande</AddressRequested>
        <AddressRequested>Jundiaí-SP</AddressRequested>
        <AddressRequested>13212-422</AddressRequested>
      </DivSearched>
    </Container>
  );
}

export default Search;
