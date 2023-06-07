import React from "react";

interface HomeProps {
  name?: string;
}

const HomePage: React.FC<HomeProps> = ({ name }): JSX.Element => {
  return (
    <>
      <div className="md:container md:mx-auto px-4">
        <div className="mt-4">
          <h1 className="text-center text-4xl">Hello, {name}</h1>
        </div>
        <div>
          <p className="text-center text-lg">
            Welcome to React with TypeScript
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
