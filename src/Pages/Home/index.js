import React, { useState } from 'react';

import { Container } from './styles';
import Header from '../../Components/Header/index';
import Search from '../../Components/Search/index';
import Maps from '../../Components/Maps/index';

import { api, apiMap } from '../../Services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast('Favor digitar um CEP', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      const dados = await api.get(`${cep}/json`);
      const mapRequest = await apiMap.get(
        `geocode/json?address=${cep}&key=AIzaSyBY6-aoDfJd3xqkiZiMonZWHEkYJ3xaXh4`
      );

      setAddress(dados.data);

      setLatLong(mapRequest.data.results[0].geometry.location);

      toast('Endereço encontrado', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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

      <ToastContainer />
    </Container>
  );
}
export default Home;
