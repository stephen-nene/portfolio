import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './app/App';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
  </React.StrictMode>
);
