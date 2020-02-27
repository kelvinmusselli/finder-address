import React, { useState } from 'react';

import { Container } from './styles';
import Header from '../../Components/Header/index';
import Search from '../../Components/Search/index';
import Maps from '../../Components/Maps/index';

import { api, apiMap } from '../../Services/api';

function Home() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');
  const [lat_long, setLatLong] = useState(null);

  const findCep = e => {
    const { value } = e.target;
    setCep(value);
    setError('');
  };

  const handleSubmitFind = async e => {
    if (!cep) {
      alert(error);
    } else {
      const dados = await api.get(`${cep}/json`);
      const mapRequest = await apiMap.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyBY6-aoDfJd3xqkiZiMonZWHEkYJ3xaXh4`
      );
      setAddress(dados.data);
      setLatLong(mapRequest.data.results[0].geometry.location);
    }
  };

  const resetInputFind = () => {
    setCep('');
  };

  return (
    <Container>
      <Header />
      <Search value={cep} method={findCep} onclick={handleSubmitFind} />
      {address ? (
        <Maps {...address} {...lat_long} method={resetInputFind} />
      ) : null}
    </Container>
  );
}
export default Home;
