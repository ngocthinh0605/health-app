import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import MyRecord from './pages/myRecord';
import Layout from './components/layout';
import Column from './pages/column';
import NotFound from './pages/notFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/my-record"
          element={
            <Layout>
              <MyRecord />
            </Layout>
          }
        />
        <Route
          path="/column"
          element={
            <Layout>
              <Column />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
