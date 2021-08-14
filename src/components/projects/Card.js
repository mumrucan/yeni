import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ project }) => {
  return (
    <div class="bg-gray-100 flex justify-center items-center rounded-xl my-6 mx-3 ">
      <div class="w-72 h-96 p-6 bg-white flex flex-col  justify-between rounded-xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all transform duration-500">
        <img
          class="w-72 h-64 object-cover rounded-t-md"
          src={project.img}
          alt={project.title}
        />
        <div class="flex flex-col justify-between h-32 ">
          <div>
            <h1 class="text-xl font-bold text-gray-700 mx-2 ">
              <Link to={'/event/' + project.id} key={project.id}>
                {' '}
                {project.title}
              </Link>
            </h1>
          </div>
          <div className="mb-2">
            <h3 class="  text-gray-700 mx-2">{project.city}</h3>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};
