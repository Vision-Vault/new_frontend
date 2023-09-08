import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth";
const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function Toprated() {
  const { user, token } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const option = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token.access}`
        }
      };
        const response = await fetch(
          `${baseUrl}/api/v1/posts/`,
          option
        );
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const topPosts = data
    .filter((post) => post.status === "active") // Filter active posts
    .sort((a, b) => b.rating - a.rating) // Sort by rating in descending order
    .slice(0, 6); // Get the top 6 posts

  return (
    <>
      <div className="toprated">
        <h1 id="lineh1">Top Projects</h1>
        <div id="linetoprated"></div>
        {/* <div className="topinfo">
          <h1>
            Projects in Need
            <br /> Support Great Ideas
          </h1>
          <p id="topp">
            Explore innovative projects seeking funding and <br />
            help turn great ideas into reality. Discover and
            <br /> support ventures that are making a positive impact.
          </p>
        </div> */}

        <div className="topposts-container">
          {topPosts.map((item, index) => (
            <div className="topposts" key={index}>
              <Link href={`/post/${item.id}`}>
                <div id="toppost1">
                  <img className="wimg" src={item.image} alt='image' />
                  <h2 id='toph2' >{item.title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
