import axios from 'axios';

const CEP = 'https://viacep.com.br/ws';
const MAPS = 'https://maps.googleapis.com/maps/api';

export const api = axios.create({
  baseURL: CEP,
  callbackParamName: 'address',
});

export const apiMap = axios.create({
  baseURL: MAPS,
});
