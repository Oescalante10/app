import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';


ReactDOM.render(
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    </>
    , document.getElementById('root'));

