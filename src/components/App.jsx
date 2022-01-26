import React from 'react';
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import "../styles/global.css";

export const App = () => {
  return (
    <Layout>
      <Login />
      <RecoveryPassword />
    </Layout>
  )
};
