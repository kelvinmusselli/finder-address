import React, { useState } from 'react';

import { Container } from './styles';
import Header from '../../components/Header/index';
import Search from '../../components/Search/index';
import Maps from '../../components/Maps/index';

import api from '../../services/api';

function Home() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');

  const findCep = e => {
    const { value } = e.target;
    setCep(value);
    setError('');
  };

  const handleSubmitFind = e => {
    if (!cep) {
      alert(error);
    } else {
      const dados = api.get(`${cep}/json/?callback=address`).then(res => {
        return res.data;
      });
      setAddress(dados);
    }
  };

  const resetInputFind = () => {
    setAddress(null);
    setCep('');
  };

  return (
    <Container>
      <Header />
      <Search value={cep} method={findCep} onclick={handleSubmitFind} />
      {address ? <Maps {...address} method={resetInputFind} /> : null}
    </Container>
  );
}
export default Home;
