import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "Avenir";
    background-color: #E3F2FD;
    color: #1E2A27;
    box-sizing: border-box;
    font-size: 9pt;
    transform-style: preserve-3d;
    overflow-x:hidden;
    overflow-y:auto;
  }
  
  title {
    background-color: "#ACAD94";
    font-family: "Avenir";
    font-size: 30pt;
    font-weight: 700;
    text-align: left;
    padding-left: 400px;
    padding-right: 44px;
    padding-top: 60px;
    position: fixed;
  }
  
  link {
    font-family: "Avenir";
    color: #384D48;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    background-color: #F4FEC1;
    list-style-type: none;
    margin: 0;
    padding: 0;
    left: 0px;
    right: 0px;
    top: 0px;
    position: fixed;
    overflow: hidden;
    border-top: 1px solid #A9531B;
    border-bottom: 1px solid #A9531B;
    width: 100%;
  }
  
  li {
    display: inline;
    float: left;
  }
  
  li a {
    display:block;
    color:#A9531B;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: 500;
    font-family: "Avenir";
    font-size: 16px;
  }
  
  li a:hover {
    background-color:#A9531B;
    color:#F4FEC1;
  }
  
  li:last-child {
    border-right: none;
  }
  blockquote { 
    background-image: url(http://typespiration.com/wp-content/themes/typespiration/images/quote.png); 
    background-position: 10px 10%; 
    background-repeat: no-repeat no-repeat; 
    padding: 150px 0; 
  }
  blockquote p { 
    color: #F4FEC1; 
    background: #A9531B; 
    font-size: 75px; 
    line-height: 74px; 
    font-weight: 700; 
    margin: 0 5px 24px; 
    float: left; 
    padding: 10px;
     margin: 0 5px 24px; 
     font-family: 'Libre Baskerville', serif;
   }
  h2 a {
     color: #adadad; 
     font-size: 25px; 
     text-decoration: none; 
     float: right; 
     font-family: 'Libre Baskerville', 
     serif; line-height: 4; 
    }
  h2 a:hover { 
    color: #A9531B;
     text-decoration: none;
     }
  * {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#E3F2FD',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
