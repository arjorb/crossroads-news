import { useState } from 'react';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Articles from './components/articles/Articles';
import ArticleModal from './components/articles/ArticleModal';

const App = () => {
  
  return (
    <Layout>
      <Navbar />
      <Articles />
    </Layout>
  );
};

export default App;
