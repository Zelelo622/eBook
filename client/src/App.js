import React, { useContext, useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "react-bootstrap";

import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </ BrowserRouter>
  );
});

export default App;
