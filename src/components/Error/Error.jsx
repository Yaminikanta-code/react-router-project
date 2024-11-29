import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <div className="flex items-center justify-center h-screen flex-col gap-4 text-center">
        <h1 className=" text-9xl">😕 </h1>
        <h1 className="text-red-700 text-6xl">
          Oops!! Something went wrong.... <br />
        </h1>
        <h1 className="text-4xl text-gray-900">{err.data}</h1>
        <h1 className="text-4xl text-gray-900">
          {err.status}: {err.statusText}
        </h1>
        <Link
          to="./"
          className="text-xl text-gray-800 underline hover:text-blue-600"
        >
          Return to Home Page
        </Link>
      </div>
    </>
  );
}

export default Error;
