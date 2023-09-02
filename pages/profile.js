'use client';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from "next/link";
import styles from "./../../styles/profile.css"
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from "@/contexts/auth"


const baseUrl = process.env.NEXT_PUBLIC_URL

export default function Profile() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://new-backend-alpha.vercel.app/api/v1/accounts/${userId}/`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        // Extract the desired fields
        const { username, profile_picture, bio, email } = data;
        setUserData({ username, profile_picture, bio, email });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  
  }, []);
 
  return (
    <div className="body1">
      <div className="container">
        <div className="profile-header">
          <div className="profile-img">
            <img src={userData?.profile_picture} width="200" alt="Profile Image" />
          </div>
          <div className="profile-nav-info">
            <div className="address">
              <p className="country" id="state">
                Profile Page: {userData?.username}
              </p>
            </div>
          </div>
          <div className="profile-option">
            <div className="notification">
              <i className="fa fa-bell"></i>
              <span className="alert-message">3</span>
            </div>
          </div>
        </div>
        <div className="main-bd">
          <div className="left-side">
            <div className="profile-side">
              <h2>
                <p>{userData?.email}</p>
              </h2>
              <p className="user-mail">
                <i className="fa fa-envelope"></i> Test@gmail.com
              </p>
              <div className="user-bio">
                <h3>Bio</h3>
                <p className="bio">
                  <h3>description : </h3>
                  {userData?.bio}
                </p>
              </div>
              <div className="profile-btn">
                <button className="chatbtn" id="chatBtn">
                  <i className="fa fa-comment"></i> Chat
                </button>
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
              {/* <p>{userData?.description}</p>
              <p>{userData?.video}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
