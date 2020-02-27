import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
  font-family:Roboto;
}

body{
  background:#0086ff no-repeat center top;
  -webkit-font-smoothing:antialiased;
}

body,input, button {
  font-size:14px Roboto, sans-serif;
}

#root{
  width:100%;
  margin:0 auto;

}

button{
  cursor: pointer;
}

`;
