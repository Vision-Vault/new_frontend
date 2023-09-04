import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import UpdateProjectForm from '@/components/UpdateProjectForm';

const UpdateProjectButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const router = useRouter(); 

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const projectId = router.query.id || 3; 
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    if (projectId) {
      fetch(`${baseUrl}/api/v1/posts/${projectId}`)
        .then((response) => response.json())
        .then((data) => setProjectData(data))
        .catch((error) => console.error('Error fetching project data:', error));
    }
  }, [projectId]);

  return (
    <div>
      {projectData !== null ? (
        <button onClick={handleButtonClick}>
          {isFormOpen ? 'Cancel Update' : 'Update Project'}
        </button>
      ) : (
        <button onClick={handleButtonClick}>Create Project</button>
      )}

      {isFormOpen && <UpdateProjectForm project={projectData} />}
    </div>
  );
};

export default UpdateProjectButton;
