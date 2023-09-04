import { useAuth } from "@/contexts/auth";
import React, { useState, useEffect } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_URL;

const UpdateProjectForm = ({ project, onClose }) => {
  const { token, user } = useAuth();
  const [formData, setFormData] = useState({
    id: project.id,
    title: project.title || '',
    description: project.description || '', 
    image: project.image || '', 
    video: project.video || '', 
    funding_goal: project.funding_goal || '', 
    allowed_donors: project.allowed_donors || '', 
    rating: project.rating || '',
    status: project.status || '', 
    created_at: project.created_at || '', 
    creator: project.creator || '', 
    category: project.category || '',
  });
  
  

  useEffect(() => {
    setFormData({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      video: project.video,
      funding_goal: project.funding_goal,
      allowed_donors: project.allowed_donors,
      rating: project.rating,
      status: project.status,
      created_at: project.created_at,
      creator: project.creator,
      category: project.category,
    });
  }, [project]);

  async function updateProject(e) {
    e.preventDefault();

    if (token) {
      const url = `${baseUrl}/api/v1/posts/${formData.id}/`;
      const options = {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
          Authorization: `Bearer ${token.access}`,
          'Content-Type': 'application/json',
        },
      };

      const res = await fetch(url, options);

      if (res.status === 200) {
        console.log('Project updated successfully');
      } else {
        console.log('Failed to update project');
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="bg-white w-5/6 h-3/4 rounded-lg shadow-lg z-50 p-6">
    <span className="absolute top-0 right-0 p-2 cursor-pointer" onClick={onClose}>&times;</span>
      <h1 className="text-2xl font-semibold text-center mb-4">Update Project</h1>
      <form>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border bg-white text-gray-700 rounded focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border bg-white text-gray-700 rounded focus:outline-none focus:border-blue-400"
            ></textarea>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <label className="block text-sm font-medium">Funding Goal</label>
            <input
              type="number"
              placeholder="Funding Goal"
              name="funding_goal"
              value={formData.funding_goal}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border bg-white text-gray-700 rounded focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <label className="block text-sm font-medium">Allowed Donors</label>
            <input
              type="text"
              placeholder="Allowed Donors"
              name="allowed_donors"
              value={formData.allowed_donors}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border bg-white text-gray-700 rounded focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border bg-white text-gray-700 rounded focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <label className="block text-sm font-medium">Image</label>
            <input
              type="text"
              placeholder="Image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border bg-white text-gray-700 rounded focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <label className="block text-sm font-medium">Video</label>
            <input
              type="text"
              placeholder="Video"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border bg-white text-gray-700 rounded focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update Project
        </button>
      </form>
    </div>
  </div>

    );
    

  
}

export default UpdateProjectForm;
