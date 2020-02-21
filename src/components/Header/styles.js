import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  height: 80px;
  width: 100%;
`;

export const AlignImageAndText = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  img {
    height: 85px;
    width: 80px;
  }
`;

export const Text = styled.text`
  font-family: Roboto, -apple-system, sans-serif;
  font-size: 35px;
  color: #0086ff;
  margin-left: 10px;
`;
