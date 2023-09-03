import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth";
const baseUrl = process.env.NEXT_PUBLIC_URL;

function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

 const { user, token } = useAuth();

  const [data, setData] = useState([]);


  async function getCtegory(id) {
    if (token) {
      const url = baseUrl + ` /api/v1/posts/categories/${id}/`;
      const option = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      };
      const res = await fetch(url, option);
      if (res.status === 200) {
        console.log(res.status);
        const data = await res.json();
        setData([]);
        data.forEach((value) => {
          setData((json) => [...json, value]);
        });
      } else {
        console.log("Failed to access protected route.");
      }
    }
  }

  useEffect(() => {
    getCtegory(category);
  }, [token]);
  return (
    <div>

    </div>
  );
}

export default CategoryPage;
