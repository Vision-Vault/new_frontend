
import Hhead from "../../components/Hhead";
import { useAuth } from "@/contexts/auth";
import { useState, useEffect } from "react";
import Login from "../login";
const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function Category() {
  const { user, token } = useAuth()

  return (
    <>
      {user ? (
        <>
          <Hhead data={"Category"} />
          <div>Welcome</div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}