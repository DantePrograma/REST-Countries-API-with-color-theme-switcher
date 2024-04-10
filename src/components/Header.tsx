import { Link } from "react-router-dom";

export const Header: React.FC<{ changeTheme: () => void; theme: string }> = ({
  changeTheme,
  theme,
}) => {
  return (
    <header className="w-full px-6 h-16 md:h-20 flex items-center justify-center shadow-[0_2px_3px_rgb(0,0,0,0.2)] bg-white dark:bg-[#2b3945] dark:text-white">
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between">
        <Link to="/" className="md:text-3xl font-bold">
          Where in the world?
        </Link>
        <button
          onClick={changeTheme}
          className="flex items-center justify-center gap-1"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}

          <p className="text-sm md:text-lg font-bold">
            {theme === "light" ? "Dark mode" : "Light mode"}
          </p>
        </button>
      </div>
    </header>
  );
};
