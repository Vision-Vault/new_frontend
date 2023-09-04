import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import { useState, useEffect } from 'react';
import Login from './login';
import PostDetail from '@/components/PostDetail';
import Comments from '@/components/Comments';
import Reply from '@/components/Reply';
import Advertisement from '@/components/Advertisement';

const baseUrl = process.env.NEXT_PUBLIC_URL

export default function PostDetails({ data }) {
    const { user, token } = useAuth()
    const [comments, serComments] = useState([])
    const [replys, serReplys] = useState([])

    async function PostComment(comment) {
        if (token) {
            const url = baseUrl + "/api/v1/comments/"

            const option = {
                method: "POST",
                body: JSON.stringify(comment),
                headers: {
                    "Authorization": `Bearer ${token.access}`,
                    "Content-Type": "application/json"
                }

            }
            const res = await fetch(url, option)
            if (res.status === 201) {
                console.log(res.status)

            } else {
                console.log("Failed to access protected route.");
            }
        }
    }

    async function PostReply(reply) {
        if (token) {
            const url = baseUrl + `/api/v1/comments/child-comments/${1}/`

            const option = {
                method: "POST",
                body: JSON.stringify(reply),
                headers: {
                    "Authorization": `Bearer ${token.access}`,
                    "Content-Type": "application/json"
                }

            }
            const res = await fetch(url, option)
            if (res.status === 201) {
                console.log(res.status)

            } else {
                console.log("Failed to access protected route.");
            }
        }
    }

    async function deletData(idComment,idPost) {
        if (token) {

            const URL = `${baseUrl}/api/v1/comments/detail/${idComment}/`;
            const option = {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token.access}`,
                },
            };
            try {
                const res = await fetch(URL, option);
                if (res.status === 204) {
                    console.log(res.status)
                    getComments(idPost)
                } else {
                    console.log("Failed to delete comment");
                }
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        } else {
            console.log("Token is missing.");
        }
    }

    async function deletReply(idReply) {
        if (token) {

            const URL = `${baseUrl}/api/v1/comments/child-detail/${idReply}/`;
            const option = {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token.access}`,
                },
            };
            try {
                const res = await fetch(URL, option);
                if (res.status === 204) {
                    console.log(res.status)
                    // getData()
                } else {
                    console.log("Failed to delete reply");
                }
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        } else {
            console.log("Token is missing.");
        }
    }

    async function getComments(id) {
        if (token) {
            const url = baseUrl + `/api/v1/comments/${id}/`
            const option = {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token.access}`
                }

            }
            const res = await fetch(url, option)
            if (res.status === 200) {
                console.log(res.status)
                const data = await res.json();
                serComments([])
                data.forEach((value) => {
                    serComments((json) => [...json, value])
                });

            } else {
                console.log("Failed to access protected route.");
            }
        }

    }

    async function getReplys(id) {
        if (token) {
            const url = baseUrl + `/api/v1/comments/child-comments/${id}/`
            const option = {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token.access}`
                }

            }
            const res = await fetch(url, option)
            if (res.status === 200) {
                console.log(res.status)
                const data = await res.json();
                serReplys([])
                data.forEach((value) => {
                    serReplys((json2) => [...json2, value])
                });

            } else {
                console.log("Failed to access protected route.");
            }
        }

    }

    useEffect(() => {
        getComments();
      }, [token]);


    return (
        <>
            {user ? (
                <>
                    <Hhead data={"Post Detail"} />
                    <div className='aseel_container'>
                        <div className='aseel_main' >
                            <PostDetail data={data} />
                            <Comments handel={PostComment} del={deletData} data={comments} getReply={getReplys} />
                            <Reply handel={PostReply} del={deletReply} data={replys} />
                            <Advertisement />
                        </div>
                    </div>
                </>
            ) : (
                <Login />
            )
            }

        </>
    )
}