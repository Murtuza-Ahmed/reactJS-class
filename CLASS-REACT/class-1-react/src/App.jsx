import React from "react";
import { StrictMode } from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Form } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Detail from "./Detail";
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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );
