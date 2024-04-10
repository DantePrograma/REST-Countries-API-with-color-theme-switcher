import { Link, useParams } from "react-router-dom";
import { useCountries } from "../hooks/useCountries";

export const Countrys = () => {
  const { countryCode } = useParams();
  const { countries } = useCountries();
  const country = countries.find(
    (country) => country.alpha3Code === countryCode
  );

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="mx-auto w-full max-w-7xl py-7 px-5 dark:text-white">
      <Link to="/">
        <button className="flex items-center gap-4 bg-white text-black dark:bg-[#2b3945] dark:text-white shadow-lg py-3 px-6 rounded mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>

          <span>Back</span>
        </button>
      </Link>

      <div className="grid  gap-5 xl:grid-cols-2">
        <img
          loading="lazy"
          className="justify-self-center sm:min-h-[20rem] sm:max-h-[20rem] sm:min-w-[35rem] sm:max-w-[35rem] rounded shadow-lg"
          src={country.flag}
          alt="selected country flag"
        />

        <div className="flex flex-col justify-between  max-xl:gap-4">
          <h2 className="font-bold text-4xl">{country.name}</h2>
          <div className="grid sm:grid-cols-2 max-xl:gap-4">
            <div>
              <p>
                <span className="font-bold">Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span className="font-bold">Population: </span>
                {country.population}
              </p>
              <p>
                <span className="font-bold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-bold">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-bold">Capital: </span>
                {country.capital}
              </p>
            </div>

            <div>
              <p>
                <span className="font-bold">Top Level Domain: </span>
                {country.topLevelDomain}
              </p>
              <p>
                <span className="font-bold">Currencies: </span>
                {country.currencies?.[0]?.name}
              </p>
              <p>
                <span className="font-bold">Languages: </span>
                {country.languages?.[0]?.name}
              </p>
            </div>
          </div>

          <div
            className={`${
              country.borders === undefined ? "flex items-center gap-3" : ""
            } `}
          >
            <h3 className="font-bold text-lg">Border Countries:</h3>
            <div className="flex flex-wrap gap-3">
              {country.borders === undefined ? (
                <p className="">No border countries</p>
              ) : (
                country?.borders?.map((border) => (
                  <Link
                    className="bg-white text-black shadow-lg py-1 px-4 rounded transition hover:bg-[#b8b7b7] "
                    key={border}
                    to={`/country/${border}`}
                  >
                    {border}
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
