import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import { useState , useEffect } from 'react';
import Login from './login';
const baseUrl = process.env.NEXT_PUBLIC_URL

export default function Index() {
  const { user, token } = useAuth()
  const [data,setData]=useState([])
  async function getCtegory() {
    if (token) {
        const url = baseUrl + `/api/v1/posts/categories/${1}/`
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
            setData([])
            data.forEach((value) => {
              setData((json) => [...json, value])
            });

        } else {
            console.log("Failed to access protected route.");
        }
    }

}

useEffect(() => {
  getCtegory();
  }, [token]);
  console.log('data',data);
  return (

    <>
      {user ? (
        <>
          <Hhead data={"Home"} />
          <div>Welcome</div>
        </>
      ) : (
        <Login />
      )
      }

    </>

  )
}