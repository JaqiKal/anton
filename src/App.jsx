import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // TODO: Rememebr change to BrowserRouter when changing eg. Netlify that better supports client side routing.
import Home from "./components/Home"; //TODO: Consider creating barrel file to export all components from one file.
import Gallery from "./components/Gallery";
import Resume from "./components/Resume";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Error403 from "./components/Error403";
import Error404 from "./components/Error404";
import Error500 from "./components/Error500";

const App = () => {
  return (
    <Router>
      <div className="relative bg-neutral-900 text-neutral-50">
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
            path="/resume"
            element={
              <Layout>
                <Resume />
              </Layout>
            }
          />

          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          {/* Specific Error Routes */}
          <Route
            path="/error403"
            element={<Error403 />}
          />
          <Route
            path="/error500"
            element={<Error500 />}
          />
          {/* 404 Not Found Route */}
          <Route
            path="/error404"
            element={<Error404 />}
          />
          {/* Catch-All Route for 404 Errors */}
          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
