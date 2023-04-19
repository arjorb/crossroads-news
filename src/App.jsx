import { useState } from "react";
import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar";
import Articles from "./components/articles/Articles";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Articles />
      <Footer />
    </Layout>
  );
};

export default App;
