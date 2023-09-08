import { useAuth } from "@/contexts/auth"
import React, { useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_URL
const ProjectForm = () => {
  const {token,user} = useAuth()
    async function PostData(e) {
    e.preventDefault();
    const projectIdea = {
      "title": e.target.title.value,
      "description": e.target.description.value,
      "funding_goal": parseFloat(e.target.funding_goal.value),
      "allowed_donors": parseInt(e.target.allowed_doners.value),
      "category": parseInt(e.target.category.value),
      "creator": user.id
    }
    if (token) {
      const url = baseUrl + "/api/v1/posts/"
      const option = {
        method: "POST",
        body: JSON.stringify(projectIdea),
        headers: {
          "Authorization": `Bearer ${token.access}`,
          "Content-Type": "application/json"
        }

      }
      const res = await fetch(url, option)
      if (res.status === 201) {
        console.log(res.status," Done")
        console.log(res)
      } else {
        console.log("Failed to access protected route");
      }
    }
    e.target.reset();

  }

  return (
    <>
      <div className="form-overlay">
        <form className="project-form" onSubmit={PostData}>
          <div id="title" className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Title" name="title" id="title" />
          </div>

          <div id="fundingGoalDiv" className="form-group">
            <label htmlFor="funding_goal">Funding Goal</label>
            <input
              type="number"
              placeholder="Funding Goal"
              name="funding_goal"
              id="funding_goal"
            />
          </div>
          <div id="categoryDiv" className="form-group">
            <label htmlFor="category">Category </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              id="category"
            />
          </div>
          <div id="allowedDonorsDiv" className="form-group">
            <label htmlFor="allowed_donors">Allowed Donors</label>
            <input
              type="text"
              placeholder="Allowed Donors"
              name="allowed_donors"
              id="allowed_donors"
            />
          </div>

          <div id="descriptionDiv" className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              id="description"
            />
          </div>
          <button id="createsubmit" type="submit" rows="4">
            Create Project
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectForm;
