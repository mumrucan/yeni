import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { StarIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/solid';

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="flex flex-col items-center ">
        {' '}
        {/* 1.kısım baslangıc */}
        <div className="w-102">
          <div className="flex justify-start">
            <div className=" mt-10 ">
              <div>
                <p className="font-roboto underline">
                  Madrid > Entertainment > Nightlife
                </p>
              </div>

              <div className="  font-roboto text-_2xl font-medium mt-10">
                {project.title}
              </div>

              <div className="flex font-roboto w-102 mt-2 justify-between">
                <div className="flex">
                  <StarIcon className="h-6 w-5 ml-1 text-red-500" />
                  <div>4.78 </div> <div className="ml-1">(816)</div>
                  <div className="underline ml-6">Madrid,Spain</div>
                </div>
                <div className="flex">
                  <ShareIcon className="h-6 w-5 ml-1 text-gray-500" />
                  <div className="ml-1"> Share</div>

                  <BookmarkIcon className="h-6 w-5 ml-6 text-gray-500" />
                  <div>Save</div>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
        {/* 1.kısım bitis */}
        <div className="flex mt-10">
          {' '}
          {/* 2.kısım baslangıc */}
          <div>
            <img
              class=" object-cover  rounded-xl shadow  lg:h-_3xl  lg:w-102 "
              src={project.img}
              alt={project.title}
            />
            <div className="flex justify-end  ">
              <button className="bg-white shadow-md rounded-xl p-2 mt-2 text-right font-roboto  ">
                Sell all photos
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          {' '}
          {/* 3.kısım baş */}
          <div>
            {' '}
            {/* 3.kısım 1. baş */}
            <div className="flex justify-between w-101">
              <div>
                <div className="font-roboto text-xl font-medium">
                  Event Hosted by xxxx
                </div>
                <div>2 hours Hosted in Spanish and English</div>
              </div>

              <div>
                {' '}
                <img
                  className="w-20 rounded-full	 object-cover"
                  src={project.img}
                  alt={project.name}
                />
              </div>
            </div>
            <div className="mt-10 w-101">
              <div className="font-roboto text-xl font-medium">
                What you will do
              </div>
              <div className="mt-6 font-roboto ">{project.desc}</div>
            </div>
          </div>
          {/* 3.kısım 1. son */}
          <div className="flex flex-col items-center w-100 h-_2xl rounded-xl ml-10 shadow-lg">
            <div className="flex mt-6">
              <div className="font-roboto text-xl font-medium ">From 250$</div>
              <div className="font-roboto text-xl ml-1">/person</div>
            </div>

            <div className="flex items-center ">
              <button className="w-103 flex flex-col justify-center items-center rounded-full border border-gray-400 h-lgg mt-4 ">
                <div className="flex justify-center items-center rounded-full  divide-x divide-black">
                  <div className="pr-6 font-roboto">Dates</div>
                  <div className="pl-6 font-roboto">Guests</div>
                </div>

                <div className="w-103 flex items-center justify-center">
                  <div className="flex font-roboto text-xs mx-4">Add dates</div>
                  <div className="flex font-roboto text-xs mx-6">1 guest</div>
                </div>
              </button>
            </div>

            {/* 3.kısım 2. baş */}
          </div>
          {/* 3.kısım 2. son */}
        </div>{' '}
        {/* 3.kısım son */}
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.deneme;
  const project = projects ? projects[id] : null;
  console.log(ownProps);
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'deneme',
      orderBy: ['createdAt', 'desc'],
    },
  ])
)(ProjectDetails);
