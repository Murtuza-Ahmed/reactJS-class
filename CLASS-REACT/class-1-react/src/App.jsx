import { React, useState } from "react";
import AdoptedPetContext from "./utils/AdoptedPetContext";
import { BrowserRouter, Routes, Route, Link, Form } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./components/SearchParams";
import Detail from "./pages/Detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  // top of App function body
  const adoptedPet = useState(null);
  return (
    <>
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
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
        </AdoptedPetContext.Provider>
      </BrowserRouter>

      {/* <Pet name="Luna" animal="Dog" breeds="Havanese" /> */}
    </>
  );
};

export default App;
