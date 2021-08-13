import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <div>
        <span>Başlık:{project.title}</span>
        <p>Bu yazı tunç tarafından oluşturuldu.</p>
        <p>13 Agustos</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
