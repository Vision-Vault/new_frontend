import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import Login from './login';
import { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const baseUrl = process.env.NEXT_PUBLIC_URL





export default function Profile() {
  const { user, token } = useAuth()
  const [data, setuserdata] = useState({
    username: '',
    profile_picture: '',
    bio: '',
    email: '',
  })
 
  const [post, setPost] = useState([{
    title: '',
    description: '',
    image: '',
    video: '',
    funding_goal: '',
    allowed_donors: '',
    rating: '',
    status: '',
    creator: '',
    category: '',
  }]);


  async function getData() {
    if (token) {
      // const url = baseUrl + `/api/v1/accounts/${user.id}/`
      const url = baseUrl + "/api/v1/accounts/2/"
      const option = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token.access}`
        }
      }
      const res = await fetch(url, option)
      if (res.status === 200) {
        const data = await res.json();
        console.log(data)
        setuserdata(data)
      } else {
        console.log("Failed to access protected route");
      }
    }
  }
  async function getPost() {
    if (token) {

      const url = "https://new-backend-alpha.vercel.app/api/v1/posts/"
      const option = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token.access}`
        }
      }
      const res = await fetch(url, option)
      if (res.status === 200) {
        const post = await res.json();
        console.log(post)
        setPost(post)
        // const Projects = post.map((post) => {
        //   return (
        //     <div>
        //       <h2>{post.description}</h2>
        //     </div>
        //   );
        // });
      } else {
        console.log("Failed to access protected route");
      }

    }
  }
  async function handleDelete( postItem) {
    if (token) {
      const protectedUrl =  baseUrl +`/api/v1/posts/${postItem.id}/`;
      const protectedOptions = {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token.access}`,
        },
      };
      try {
        const protectedResponse = await fetch(protectedUrl, protectedOptions);
        if (protectedResponse.status === 204) {
          console.log("done ")
          getPost()
        } else {
          console.log("Failed to post data.");
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    } else {
      console.log("Token is missing.");
    }
  }

  useEffect(() => {
    getData();
    getPost(token, setPost);
  }, [token]);

  return (
    <>
      {user ? (
        <>
          <Hhead data={"Home"} />
          <div className="mo-body1">
            <div className="mo-container">
              <div className="mo-profile-header">
                <div className="mo-profile-img">
                  <img src={data.profile_picture} width="200" alt="Profile Image" />
                </div>
                <div className="mo-profile-nav-info">
                  <div className="mo-address">
                    <p className="mo-country" id="mo-state">
                      Profile Page: {data.username}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mo-main-bd">
                <div className="mo-left-side">
                  <div className="mo-profile-side">
                    <p className="mo-user-mail">
                      <i className="fa fa-envelope"></i> {data.email}
                    </p>
                    <div className="mo-user-bio">
                      <h2>Category : </h2>
                      
                      <p className="mo-bio">
                      {post.title}
                      </p>
                    </div>
                    <div className="mo-profile-btn">
                      <button className="mo-createbtn" id="mo-Create-post">
                        <i className="fa fa-plus"></i> Create Project
                      </button>
                    </div>
                    <div className="mo-user-rating">
                      <h3 className="mo-rating">4.9</h3>
                      <div className="mo-rate">
                        <div className="mo-star-outer">
                          <div className="mo-star-inner">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <span className="mo-no-of-user-rate">
                          <span>120</span>&nbsp;&nbsp;Posts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mo-right-side">
                  <div className="mo-right-side-post">
                    <h1>Projects  :- </h1>
                    <div>
                    
                    {
                        post.map((postItem, index) => (
                          <div className="mo-post-card" key={index}>
                            <h2 className="mo-post-description">{postItem.title}</h2>
                            <p className="mo-post-description">{postItem.description}</p>
                            <div className="mo-post-actions">
                              <button
                                className="mo-delete-button"
                                onClick={() => handleDelete(postItem.id)}
                              >
                                Delete
                                </button>
                                <button
                                className="mo-update-button"
                                onClick={() => handleUpdate(postItem.id)}
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        ))
                        }
                    </div>
                  </div>
                </div>
              </div>
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




