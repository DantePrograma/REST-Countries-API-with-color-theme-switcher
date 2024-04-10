import { useState } from "react";
import dataCountries from "../../data.json";
import { Country } from "../types";

const Countries = dataCountries as Country[];

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>(Countries);
  const [searchItem, setSearchItem] = useState<string>("");


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    const filteredCountries = Countries.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setCountries(filteredCountries);
    setSearchItem(searchValue);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    if (filterValue === "All") {
      setCountries(Countries);
    } else {
      const filteredCountries = Countries.filter(
        (country) => country.region === filterValue
      );
      setCountries(filteredCountries);
    }
  };

  return {
    countries,
    searchItem,
    handleSearch,
    handleFilter,
  };
};
