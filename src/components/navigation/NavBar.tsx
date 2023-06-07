import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold">
              My App
            </Link>
          </div>
          <div className="flex">
            <div className="ml-4">
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "bg-black text-white" : ""
                } text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
            </div>
            <div className="ml-4">
              <Link
                to="/child"
                className={`${
                  location.pathname === "/child" ? "bg-black text-white" : ""
                } text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Child
              </Link>
            </div>
            {/* Add more menu items here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
