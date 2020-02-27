import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Container, DivSearched, AddressRequested, DivMap } from './styles';

function Maps(props) {
  const style = {
    width: '100%',
    minWidth: '200px',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  };

  return (
    <Container>
      <DivSearched>
        <AddressRequested>{props.logradouro}</AddressRequested>
        <AddressRequested>{props.bairro}</AddressRequested>
        <AddressRequested>{props.localidade}</AddressRequested>
        <AddressRequested>{props.cep}</AddressRequested>
      </DivSearched>
      <DivMap>
        <Map
          google={props.google}
          style={style}
          zoom={15}
          initialCenter={{ lat: props.lat, lng: props.lng }}
          center={{ lat: props.lat, lng: props.lng }}
        >
          <Marker
            title={'Minha localização'}
            name={'location'}
            position={{ lat: props.lat, lng: props.lng }}
          />
        </Map>
      </DivMap>
    </Container>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBY6-aoDfJd3xqkiZiMonZWHEkYJ3xaXh4',
})(Maps);
