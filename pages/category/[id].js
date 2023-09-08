
import Hhead from "../../components/Hhead";
import { useAuth } from "@/contexts/auth";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Login from "../login";
import Link from "next/link";
import PagesNav from "@/components/pagesnav";

import Footer from "@/components/footer";
const baseUrl = process.env.NEXT_PUBLIC_URL;


export default function Category() {
  const { user, token } = useAuth()
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  async function getCtegory() {

    if (token && id) {
      const url = baseUrl + `/api/v1/posts/categories/${id}/`
      const option = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token.access}`
        }
      }
      const res = await fetch(url, option)
      if (res.status === 200) {
        console.log(res.status);
        const data = await res.json();
        setData(data)
        // data.forEach((value) => {
        //   setData((json) => [...json, value])
        // });
        console.log(data)

      } else {
        console.log("Failed to access protected route.");
      }
    }
  }
  useEffect(() => {
    if (token && id) {
      getCtegory();
    }
  }, [token, id]);

  return (
    <>
      {user ? (
        <>
<PagesNav/>
          <Hhead data={"Category"} />


          <div id="card_mo" class="bg-gray-100">

            {data && data.map((categorieItem, index) => (

              <div id="moh_card_inside" key={index}>
                <Link href={`/post/${categorieItem.id}`}>
                  <p class="post-text text-gray-700 font-extrabold">{categorieItem.title}</p>
                  <br />

                  <p class="date text-gray-500 text-sm leading-[1.7]">

                    {categorieItem.description.length > 50
                      ? `${categorieItem.description.substring(0, 200)}...`
                      : categorieItem.description}
                  </p>
                </Link>
              </div>
            ))}

          </div>
<Footer/>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}