import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Layout from "./components/Layout";
import Error500 from "./components/Error500";

const App = () => {
  return (
    <Router basename="/anton">
      <div className="relative bg-customWhite">
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
            path="/work"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/error500"
            element={<Error500 />}
          />

          <Route
            path="*"
            element={<Error500 />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
