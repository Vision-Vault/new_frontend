import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth";
const baseUrl = process.env.NEXT_PUBLIC_URL;

function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const { user, token } = useAuth();
  const [data, setData] = useState([]);

  async function getCategory(categoryId) {
    if (token) {
      const url = `${baseUrl}/api/v1/posts/categories/${categoryId}/`;
      const option = {
        method: "GET",
        headers: {
         ' Authorization': `Bearer ${token.access}`,
        },
      };
      try {
        const res = await fetch(url, option);
        if (res.status === 200) {
          const jsonData = await res.json();
          console.log(jsonData);
          setData(jsonData);
        } else {
          console.log("Failed to access protected route.");
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
  }

  useEffect(() => {
    if (category) {
      getCategory(category); // Call the getCategory function with the category parameter
    }
  }, [category, token]);

  return (
    <div>
      <h1>cccccccccccc===  </h1>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default CategoryPage;
