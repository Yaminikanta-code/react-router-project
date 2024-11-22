import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div
      className="min-h-screen flex items-center justify-center
      text-3xl text-center font-bold"
    >
      User: {id}{" "}
    </div>
  );
}

export default User;
