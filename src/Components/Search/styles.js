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
  margin-right: 10px;
  background-color: #fff;
  border-radius: 4px;
  height: 120px;
  padding: 5px;
  flex-direction: column;
`;
export const DivToSearch = styled.div`
  margin-top: 20px;
  flex-direction: column;

  input {
    border-radius: 4px;
    height: 25px;
    width: 240px;
    background: #fff;
    font-family: Roboto, -apple-system, sans-serif;
  }
`;
export const LabelAddress = styled.text`
  font-size: 18px;
  padding-right: 5px;
  font-family: Roboto, -apple-system, sans-serif;
`;

export const ButtonSearch = styled.button`
  width: 50px;
  margin-left: 5px;
  height: 25px;
  border: none;
  border-radius: 4px;
  background: #0086ff;
`;
