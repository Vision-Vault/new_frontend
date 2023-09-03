import React, { useState } from 'react';
import ProjectForm from './createProject'; // Adjust the path as needed

const CreateProjectButton = () => { 
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Create Project</button>
      {isFormOpen && <ProjectForm />}
    </div>
  );
};

export default CreateProjectButton;
