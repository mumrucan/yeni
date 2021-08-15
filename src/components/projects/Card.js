import React from 'react';
import { Link } from 'react-router-dom';
import { LocationMarkerIcon } from '@heroicons/react/solid';

export const Card = ({ project }) => {
  return (
    <Link to={'/event/' + project.id} key={project.id}>
      <div
        key={project.id}
        className="bg-white flex justify-center rounded-t-xl my-6 mx-auto hover:scale-105 transition-all transform duration-300 w-52 2xl:w-96 xl:w-72  md:w-64 "
      >
        <div className=" flex flex-col ">
          <div className=" md:flex-shrink-0   bg-white flex flex-col mx-3 justify-between   ">
            <img
              class="h-xl 2xl:h-xxl w-52 object-cover  rounded-xl shadow md:h-80  2xl:w-96  xl:w-full  md:w-full"
              src={project.img}
              alt={project.title}
            />
          </div>

          <div className="flex flex-col justify-between h-28 w-48 2xl:w-64 xl:w-full  md:w-full mt-2 bg-white ">
            <div className="mb-1 w-48 2xl:w-64 xl:w-full  md:w-full flex ">
              <div>
                <LocationMarkerIcon className="h-6 w-5 ml-1 text-red-500" />
              </div>
              <div>
                <h3 className=" text-xxs 2xl:text-xs xl:text-xs font-roboto md:text-xs pt-1	w-48 2xl:w-64 xl:w-full  md:w-full text-gray-700 mx-2">
                  {project.city}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between h-32 w-48 2xl:w-64 xl:w-full  md:w-full ">
              <h1 className="text-sm 2xl:text-base font-roboto xl:text-base  md:text-base  	w-48 2xl:w-64 xl:w-full  md:w-full	 text-gray-700 mx-2  ">
                {' '}
                {project.title}
              </h1>
            </div>

            <div className="flex flex-grow justify-start w-48 2xl:w-64 xl:w-full  md:w-full ">
              <div className="mb-2 flex justify-start w-48 2xl:w-64 xl:w-full  md:w-full ">
                <h3 className=" 2xl:text-base xl:text-base  md:text-base text-xss font-roboto font-semibold bg-white	text-left text-black mx-2 w-28">
                  From 15${' '}
                </h3>{' '}
                <h3 className="text-xss	2xl:text-base xl:text-base  font-roboto md:text-base text-gray-700  w-48 2xl:w-64 xl:w-full text-left  md:w-full">
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
