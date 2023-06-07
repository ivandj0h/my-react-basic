import React from "react";

const ListGroup: React.FC = (): JSX.Element => {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold">This is The List Component</h2>
      <ul className="max-w-md space-y-1 list-disc list-inside border-black">
        <li className=" border-b-2 p-2 border-slate-300 cursor-pointer">
          This is Item One
        </li>
        <li className=" border-b-2 p-2 border-slate-300 cursor-pointer">
          This is Item Two
        </li>
        <li className=" border-b-2 p-2 border-slate-300 cursor-pointer">
          This is Item Three
        </li>
        <li className=" border-b-2 p-2 border-slate-300 cursor-pointer">
          This is Item Four
        </li>
        <li className=" border-b-2 p-2 border-slate-300 cursor-pointer">
          This is Item Five
        </li>
      </ul>
    </>
  );
};

export default ListGroup;
