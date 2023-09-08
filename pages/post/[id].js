import Hhead from "@/components/Hhead";
import { useAuth } from "@/contexts/auth"
import { useState, useEffect } from 'react';
import Login from '../login';
import { useRouter } from 'next/router';
import PostDetail from '@/components/PostDetail';
import Comments from '@/components/Comments';
import Reply from '@/components/Reply';
import Advertisement from '@/components/Advertisement';
import PagesNav from "@/components/pagesnav";
import Footer from "@/components/footer";

const baseUrl = process.env.NEXT_PUBLIC_URL

export default function PostDetails() {
    const router = useRouter();
    const { id } = router.query;
    const { user, token } = useAuth()
    const [comments, serComments] = useState([])
    const [replys, serReplys] = useState([])
    const [project, setData] = useState([])
    const [activeComment,setActiveComment]= useState(0)

    async function getPost(id) {
        if (token) {
            const url = baseUrl + `/api/v1/posts/${id}/`
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
                setData(data)
            } else {
                console.log("Failed to access protected route.");
            }
        }

    }


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
                getComments(comment.project)

            } else {
                console.log("Failed to access protected route.");
            }
        }
    }

    async function PostReply(reply) {
        if (token) {
            const url = baseUrl + `/api/v1/comments/child-comments/${reply.parent_comment}/`

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
                getReplys(reply.parent_comment)

            } else {
                console.log("Failed to access protected route.");
            }
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
        getPost(id);
        getComments(id);
    }, [token]);

    async function updateComment(comment,id,idPost) {
        let url = baseUrl + `/api/v1/comments/detail/${id}/`;
        const option = {
            method: "PUT",
            body: JSON.stringify(comment),
            headers: {
                "Authorization": `Bearer ${token.access}`,
                "Content-Type": "application/json"
            }

        }
        let response = await fetch(url, option)
        if (response.status === 200) {
            console.log(response.status)
            getComments(idPost);
        }
    }

    async function updateReplay(comment,id,commentId) {
        let url = baseUrl + `/api/v1/comments/child-detail/${id}/`;
        const option = {
            method: "PUT",
            body: JSON.stringify(comment),
            headers: {
                "Authorization": `Bearer ${token.access}`,
                "Content-Type": "application/json"
            }

        }
        let response = await fetch(url, option)
        if (response.status === 200) {
            console.log(response.status)
            getReplys(commentId);
        }
    }

    async function deletData(idComment, idPost) {
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

    async function deletReply(idReply, idComment) {
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
                    getReplys(idComment)
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

    async function Postdonation(done,postId) {
        if (token) {
            const url = baseUrl + `/api/v1/posts/${postId}/donate/`

            const option = {
                method: "POST",
                body: JSON.stringify(done),
                headers: {
                    "Authorization": `Bearer ${token.access}`,
                    "Content-Type": "application/json"
                }

            }
            const res = await fetch(url, option)
            if (res.status === 201) {
                console.log(res.status)
                getPost(postId)

            } else {
                console.log("Failed to access protected route.");
            }
        }
    }


    return (
        <>
            {user ? (
                <>
                <PagesNav/>
                    <Hhead data={"Post Detail"} />
                    <div className='aseel_container'>
                        <div className='aseel_main' >
                            <PostDetail data={project} donation={Postdonation} />
                            <Comments handel={PostComment} del={deletData} data={comments} getReply={getReplys} updateComment={updateComment} postId={id} activate={setActiveComment} />
                            <Reply handel={PostReply} del={deletReply} data={replys} updateReplay={updateReplay} commentId={activeComment} />
                            <Advertisement />
                        </div>
                    </div>
                </>
            ) : (
                <Login />
            )
            }
<Footer/>
        </>
    )
}