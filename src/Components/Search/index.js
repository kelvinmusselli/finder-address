import React from 'react';
import { FaSearch } from 'react-icons/fa';
import MaskedInput from 'react-text-mask';

import {
  Container,
  DivAddres,
  LabelAddress,
  DivToSearch,
  ButtonSearch,
} from './styles';

function Search({ value, method, onclick }) {
  return (
    <Container>
      <DivAddres>
        <LabelAddress>Pesquise seu endereço</LabelAddress>
        <DivToSearch>
          <LabelAddress>CEP:</LabelAddress>
          <MaskedInput
            value={value}
            onChange={method}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
          />
          <ButtonSearch onClick={onclick}>
            <FaSearch color={'#fff'} />
          </ButtonSearch>
        </DivToSearch>
      </DivAddres>
    </Container>
  );
}

export default Search;
