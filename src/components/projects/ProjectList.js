import React from 'react';
import ProjectSummary from './ProjectSummary';

function ProjectList({ projects }) {
  return (
    <div className="flex flex-wrap justify-center w-3/4 ">
      {projects &&
        projects.map((project) => {
          return <ProjectSummary project={project} />;
        })}
    </div>
  );
}

export default ProjectList;
