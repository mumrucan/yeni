import React from 'react';
import ProjectSummary from './ProjectSummary';

function ProjectList({ projects }) {
  return (
    <div>
      <div className="flex justify-center  ">
        <div className=" w-3/4 mt-10 ml-4 font-bold font-roboto text-_2xl">
          Popular in Madrid
        </div>
      </div>
      <div className="flex justify-center   ">
        <div className="flex flex-wrap justify-center  w-4/5">
          {projects &&
            projects.map((project) => {
              return <ProjectSummary project={project} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
