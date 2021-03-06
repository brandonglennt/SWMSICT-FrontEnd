import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    margin:0;
    padding:0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin:0;
    padding:0;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto Condensed', sans-serif;
 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto Condensed', sans-serif;
 Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
