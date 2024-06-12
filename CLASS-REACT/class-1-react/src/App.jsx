import React from "react";

// import { render } from "react-dom";

import { BrowserRouter, Routes, Route, Link, Form } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./components/SearchParams";
import Detail from "./pages/Detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to={"/"}>
              <h1>Adopt Me!</h1>
            </Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>

      {/* <Pet name="Luna" animal="Dog" breeds="Havanese" /> */}
    </>
  );
};

export default App;
