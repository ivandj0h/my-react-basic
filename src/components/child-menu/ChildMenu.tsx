import React from "react";
import NavBar from "../navigation/NavBar";
import HomePage from "../home/HomePage";

const ChildMenu: React.FC = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-4">
        <HomePage name="Juna" />
      </div>
    </div>
  );
};

export default ChildMenu;
