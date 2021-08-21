import React from 'react';
import { Link } from 'react-router-dom';
import { LocationMarkerIcon } from '@heroicons/react/solid';

export const Card = ({ project }) => {
  return (
    <Link to={'/event_detail/' + project.id} key={project.id}>
      <div
        key={project.id}
        className="bg-white flex justify-center rounded-t-xl  hover:scale-105 transition-all transform duration-300 my-4 mx-2   "
      >
        <div className=" flex flex-col  w-40 lg:w-72  ">
          <div className=" md:flex-shrink-0   bg-white flex flex-col justify-between     ">
            <img
              class=" object-cover  rounded-xl shadow  h-xl lg:h-xxl  "
              src={project.img}
              alt={project.title}
            />
          </div>

          <div className="flex flex-col justify-between  bg-white w-44 mx-1 xl:w-72 lg:w-72 ">
            <div className=" flex mt-1">
              <div>
                <LocationMarkerIcon className="h-5 w-5 ml-1 text-red-500" />
              </div>
              <div>
                <h3 className=" text-xxs 2xl:text-xs xl:text-xs font-roboto md:text-xs  text-gray-700 mx-2 mt-1">
                  {project.city}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between  ">
              <h1 className="text-sm 2xl:text-base font-roboto xl:text-base  md:text-base  		 text-gray-700 mx-2  ">
                {' '}
                {project.title}
              </h1>
            </div>

            <div className="flex flex-grow justify-start  ">
              <div className="mb-2 flex justify-start  ">
                <h3 className=" 2xl:text-base xl:text-base  md:text-base text-xss font-roboto font-semibold bg-white	text-left text-black mx-2 ">
                  From 15${' '}
                </h3>{' '}
                <h3 className="text-xss	2xl:text-base xl:text-base  font-roboto md:text-base text-gray-700   text-left  ">
                  / person
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
