import React from "react";
import NavBar from "../navigation/NavBar";
import ListGroup from "../ListGroup";
import HomePage from "../home/HomePage";

const ParentMenu: React.FC = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-4">
        <HomePage name="Juna" />
        <div className="mt-5">
          <ListGroup />
        </div>
      </div>
    </div>
  );
};

export default ParentMenu;
