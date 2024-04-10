import { Link } from "react-router-dom";
import { useCountries } from "../hooks/useCountries";

export const CountriesList = () => {
  const { countries, searchItem, handleSearch, handleFilter } = useCountries();

  return (
    <main className="mx-auto w-full max-w-7xl min-h-screen py-7 px-5 dark:text-white">
      <section className="mb-7">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={searchItem}
              onChange={handleSearch}
              type="search"
              className="w-full max-w-[30rem] shadow-md block p-4 ps-10 text-sm text-gray-900 rounded-lg focus:ring-black focus:border-black dark:bg-[#2b3945] dark:placeholder:text-white dark:text-white "
              placeholder="Search for a country..."
            />
          </div>

          <select
            onChange={handleFilter}
            className="p-4  block w-[200px] shadow-md rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-[#2b3945] dark:text-white "
          >
            <option value="" disabled>
              Filter by region
            </option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>

      <section className="mx-auto">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-12">
          {countries.map((country) => (
            <Link to={`/country/${country.alpha3Code}`} key={country.name}>
              <li className="rounded-lg shadow-[0px_0px_20px_1px_#c2bebe] dark:shadow-[0px_0px_5px_0px_#000000] overflow-hidden h-[350px] w-[270px] grid grid-rows-2 dark:bg-[#2b3945]">
                <img
                  loading="lazy"
                  className="h-full w-full "
                  src={country.flag}
                  alt=""
                />
                <div className="flex flex-col justify-center gap-3 p-3">
                  <h1 className="font-bold text-xl">{country.name}</h1>
                  <div className="flex flex-col gap-1 tracking-wide">
                    <p className="text-[.9rem] ">
                      <span className="font-bold">Population: </span>
                      <span>{country.population}</span>
                    </p>
                    <p className="text-[.9rem] ">
                      <span className="font-bold">Region: </span>
                      <span>{country.region}</span>
                    </p>
                    <p className="text-[.9rem] ">
                      <span className="font-bold">Capital: </span>
                      <span>{country.capital}</span>
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
};
