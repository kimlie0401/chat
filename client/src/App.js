import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch } from "react-router-dom";

import ApolloProvider from "./ApolloProvider";

import "./App.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthProvider } from "./context/auth";
import DynamicRoute from "./util/DynamicRoute";

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <BrowserRouter>
          <Container className="p-5">
            <Switch>
              <DynamicRoute path="/register" component={Register} guest />
              <DynamicRoute exact path="/" component={Home} authenticated />
              <DynamicRoute path="/login" component={Login} guest />
            </Switch>
          </Container>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
