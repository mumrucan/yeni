import React from 'react';
import ProjectSummary from './ProjectSummary';
import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { aramaYap } from '../../store/actions/searchActions';

import { aramaKaydet } from '../../store/actions/searchResultActions';

const ProjectList = (props) => {
  const projects = props.projects;
  const search = props.search;
  const result = props.result;

  const cities = projects && projects.map((item) => item.city);
  let uniqueCities = [...new Set(cities)];

  return (
    <div className="flex flex-col justify-center font-roboto items-center mt-4  ">
      <div className=" 2xl:w-4/5 xl:w-4/5 lg:w-full md:w-full w-full z-10   ">
        <div className="flex flex-col  justify-center items-center  ">
          <div className=" flex font-roboto text-_2xl mt-4   ">
            <div className="flex font-bold">
              <div className="flex mt-1">Events in</div>
            </div>
            <div className="">
              <div className="flex border ml-2 rounded-xl">
                <SearchIcon className="h-6 w-6 text-red-500  ml-1 " />

                <input
                  autoComplete="off"
                  onChange={(event) => {
                    props.aramaYap(event.target.value);
                  }}
                  type="text"
                  id="input"
                  defaultValue={result}
                  placeholder="Search.."
                  className="text-left  text-xl h-lgx w-48 text-red-500 rounded-xl  font-bold focus:outline-none ml-1 placeholder-red-500 focus:placeholder-gray-500  "
                ></input>
              </div>

              <div className=" bg-white w-56 shadow ml-2 overflow-auto max-h-deneme absolute ">
                {uniqueCities &&
                  uniqueCities
                    .filter((city) => {
                      if (search == '') {
                        return '';
                      } else if (
                        city.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return city;
                      }
                    })
                    .map((city) => {
                      return (
                        <div
                          className="m-2 text-base font-roboto my-1   "
                          onClick={() => {
                            props.aramaKaydet(city);
                            props.aramaYap('');
                            document.getElementById('input').value = city;
                          }}
                        >
                          <div className="hover:bg-gray-100 cursor-pointer p-1 flex ">
                            <LocationMarkerIcon className="h-4 w-4 ml-1 text-red-500 mr-1" />
                            {city}
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center  2xl:w-full  xl:w-full lg:w-full md:w-full w-full mt-4 font-roboto text-xxs md:text-sm items-center mb-4  ">
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1  my-1">
              <button>Filters</button>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Guests</button>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Price</button>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Language offered</button>
            </div>

            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Art and culture</button>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Food and drink</button>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Sports</button>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Entertainment</button>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Sightseeing</button>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 border border-gray-300 flex justify-center items-center mx-1 my-1">
              <button>Transportation activities</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center  2xl:w-4/5 xl:w-4/5 lg:w-full md:w-full w-full  ">
        {projects &&
          projects
            .filter((project) => {
              if (result == '') {
                return project;
              } else if (
                project.city.toLowerCase().includes(result.toLowerCase())
              ) {
                return project;
              }
            })
            .map((project) => {
              return <ProjectSummary project={project} />;
            })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    projects: state.firestore.ordered.deneme,
    result: state.result,
  };
};

export default compose(
  connect(mapStateToProps, { aramaYap, aramaKaydet }),

  firestoreConnect([{ collection: 'deneme', orderBy: ['createdAt', 'desc'] }])
)(ProjectList);
