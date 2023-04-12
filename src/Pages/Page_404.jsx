import React from 'react';
import { NavLink } from "react-router-dom";

const Page_404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-red-500 font-bold text-9xl">
        404
      </h1>

      <NavLink to={'/'} className="py-2 px-4 font-medium text-2xl hover:bg-red-300 transition-all rounded-[10px]">
        Back Home
      </NavLink>
    </div>
  );
}

export default Page_404;
