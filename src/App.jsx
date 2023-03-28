import { useState } from 'react';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Cards from './components/Cards';

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Cards />
    </Layout>
  );
};

export default App;
