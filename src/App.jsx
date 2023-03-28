import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar';
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
