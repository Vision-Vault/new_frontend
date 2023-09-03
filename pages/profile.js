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

  useEffect(() => {
    getData();
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
                    <h2>
                      <p>{data.email}</p>
                    </h2>
                    <p className="user-mail">
                      <i className="fa fa-envelope"></i> Test@gmail.com
                    </p>
                    <div className="user-bio">
                      <h3>Bio</h3>
                      <p className="bio">
                        <h3>description : </h3>
                        {data.bio}
                      </p>
                    </div>
                    <div className="profile-btn">
                      <button className="createbtn" id="Create-post">
                        <i className="fa fa-plus"></i> Create
                      </button>
                    </div>
                    <div className="user-rating">
                      <h3 className="rating">4.5</h3>
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
                          <span>123</span>&nbsp;&nbsp;Posts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="right-side-post">
                    <h1>Your Post :- </h1>
                    {data.bio}
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




