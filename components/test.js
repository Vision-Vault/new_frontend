import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth";
const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function Top333() {
  const { user, token } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const option = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        };
        const response = await fetch(
          `${baseUrl}/api/v1/posts/categories/2/`,
          option
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);
      console.log(jsonData);

  const topPosts = data
    .filter((post) => post.status === "active") // Filter active posts

  return (
    <>
<h1>ccat page</h1>
    </>
  );
}
