import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProvider } from "./Components/ContextFolder/ProductContext.jsx";
import { ProductItemProvider } from "./Components/ContextFolder/ProductItemContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-2nnpr17sg8wg4ykz.us.auth0.com"
    clientId="YULXHO0VvyUvtWDooSD9mJjFSs9Z0Zbw"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <AppProvider>
      <ProductItemProvider>
        <App />
      </ProductItemProvider>
    </AppProvider>
  </Auth0Provider>
);
