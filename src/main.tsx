import ReactDOM from "react-dom/client";
import React from "react";
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from "./context/cart/CartContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <CartContextProvider>
      <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
