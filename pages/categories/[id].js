
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth";
const baseUrl = process.env.NEXT_PUBLIC_URL;

function CategoryPage() {
  const { category } = router.query;
  const { user } = useAuth();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) {
      // Handle the case where category is not provided in the URL
      setLoading(false);
      return;
    }

    // Check if the user is authenticated
    if (!user) {
      // Handle the case where the user is not authenticated (e.g., redirect to login)
      setLoading(false);
      return;
    }

    // Fetch posts based on the category from your API
    fetch(
      `https://new-backend-alpha.vercel.app/api/v1/posts/categories/${category}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [category, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!category || posts.length === 0) {
    return <div>No posts found for this category.</div>;
  }
  return (
    <div>
      <h1>{category} Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            {/* Add more post information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
