import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import Login from './login';
import { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const baseUrl = process.env.NEXT_PUBLIC_URL

export default function Profile() {
  const { user, token } = useAuth()
  const [data,setuserdata] = useState({
    username: '',
    profile_picture : '',
    bio: '',
    email: '',
 })
 const [post,setPost] = useState({
  title:'',
  description:'',
  image:'',
  video:'',
  funding_goal:'',
  allowed_donors:'',
  rating:'',
  status:'',
  creator:'',
  category:'',
 });

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
      
      const url = "https://new-backend-alpha.vercel.app/api/v1/posts/2/"
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
        //   return(
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

  useEffect(() => {
    getData();
    getPost();
  }, [token]);

  return (

    <>
      {user ? (
        <>
          <Hhead data={"Home"} />
          <div className="body1">
            <div className="container">
              <div className="profile-header">
                <div className="profile-img">
                  <img src={data.profile_picture} width="200" alt="Profile Image" />
                </div>
                <div className="profile-nav-info">
                  <div className="address">
                    <p className="country" id="state">
                      Profile Page: {data.username}
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-bd">
                <div className="left-side">
                  <div className="profile-side">

                    <p className="user-mail">
                      <i className="fa fa-envelope"></i> {data.email}
                    </p>
                    <div className="user-bio">
                      <h2>Category : </h2>
                      {post.title}
                      <p className="bio">
                        {/* <h3>description : </h3> */}
                        {/* {data.bio} */}
                      </p>
                    </div>
                    <div className="profile-btn">
                      <button className="createbtn" id="Create-post">
                        <i className="fa fa-plus"></i> Create Project
                      </button>
                    </div>
                    <div className="user-rating">
                      <h3 className="rating">4.9</h3>
                      <div className="rate">
                        <div className="star-outer">
                          <div className="star-inner">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <span className="no-of-user-rate">
                          <span>120</span>&nbsp;&nbsp;Posts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="right-side-post">
                    <h2>Your Projects  :- </h2>
                    <p>{post.description}</p>
                    <br/>
                    <br/>
                    <p> So the project {post.description} this just a test  </p>
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




