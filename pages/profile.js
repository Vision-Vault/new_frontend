import Hhead from "../components/Hhead";
import { useAuth } from "@/contexts/auth";
import Login from "./login";
import { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import PagesNav from "@/components/pagesnav";
import Footer from "@/components/footer";
const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function Profile() {
  const { user, token } = useAuth();
  const [userData, setUserData] = useState({
    username: "",
    profile_picture: "",
    bio: "",
    email: "",
  });

  const [userPosts, setUserPosts] = useState([]);

  async function fetchUserData() {
    if (token) {
      const url = baseUrl + `/api/v1/accounts/${user.id}/`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      };
      const response = await fetch(url, options);
      if (response.status === 200) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        console.log("Failed to access protected route");
      }
    }
  }

  async function fetchUserPosts() {
    if (token) {
      const url = `https://new-backend-alpha.vercel.app/api/v1/posts/user/${user.id}/`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      };
      const response = await fetch(url, options);
      if (response.status === 200) {
        const posts = await response.json();
        setUserPosts(posts);
      } else {
        console.log("Failed to access protected route");
      }
    }
  }

  async function handleDeletePost(postId) {
    if (token) {
      const deleteUrl = baseUrl + `/api/v1/posts/${postId}/`;
      const deleteOptions = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      };
      try {
        const deleteResponse = await fetch(deleteUrl, deleteOptions);
        if (deleteResponse.status === 204) {
          console.log("Post deleted successfully");
          fetchUserPosts();
        } else {
          console.log("Failed to delete post.");
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    } else {
      console.log("Token is missing.");
    }
  }

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [token]);

  return (
    <>
      {user ? (
        <>
        <PagesNav/>
          <div className="bg-gradiant-green-yellow py-8 bg-opacity-75">
            <Hhead data={"Profile"} />
            <div className="py-8">
              <div className="container mx-auto flex flex-col items-center ">
                <img
                  src={`http://res-console.cloudinary.com/ddtte4xlk/${userData.profile_picture}`}
                  className="rounded-full h-36 w-36 mb-4 border-4 border-white "
                  alt=".."
                />
                <h1 className="text-3xl font-semibold text-gray-800">
                  {userData.username}
                </h1>
                <p className="text-lg text-black-600 mt-2">
                  Bio: {userData.bio}
                </p>
                <p className="text-lg text-black-600 mt-2">
                  Email: {userData.email}
                </p>
              </div>
            </div>
            <div className="container mx-auto mt-8 ">
              <h2 className="text-2xl font-semibold text-gray-800 ">
                My Projects
              </h2>
              <div className="mt-4">
                {userPosts.map((post, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 mt-4"
                  >
                    <h2 className="text-xl font-semibold text-gray-800">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{post.description}</p>
                    <div className="flex justify-end mt-4">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-full"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 ml-2 rounded-full"
                        onClick={() => handleUpdatePost(post.id)}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer/>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
