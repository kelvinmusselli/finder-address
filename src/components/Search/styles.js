import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DivAddres = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 15px;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 4px;
  height: 120px;
  padding: 5px;
  flex-direction: column;
  width: 100%;
`;
export const DivToSearch = styled.div`
  margin-top: 20px;
  flex-direction: column;
`;
export const LabelAddress = styled.text`
  font-size: 18px;
  padding-right: 5px;
  font-family: Roboto, -apple-system, sans-serif;
`;

export const InputSearch = styled.input`
  border-radius: 4px;
  height: 35px;
`;

export const ButtonSearch = styled.button``;

export const DivSearched = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  background: #f7f7f7;
  max-width: 100%;
  width: 355px;
  padding: 5px;
`;

export const AddressRequested = styled.text`
  font-family: Roboto, -apple-system, sans-serif;
`;
