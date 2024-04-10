import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { CountriesList } from "./components/CountriesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Countrys } from "./components/Country";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <BrowserRouter>
        <Header theme={theme} changeTheme={handleChangeTheme} />
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:countryCode" element={<Countrys />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
