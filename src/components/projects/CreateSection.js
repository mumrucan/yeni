import React from 'react';

export const CreateSection = ({ handleChange, handleSubmit }) => {
  return (
    <div className="flex flex-col justify-center items-center my-4 font-roboto">
      <div>
        <div>
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Basic Info
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Name your event and tell event why they should come. Add
                  details that highlight what makes it unique.
                </p>
              </div>
            </div>
            <div class="mt-5 m-4 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit}>
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6 m-4">
                    <div class="grid grid-cols-3 gap-6">
                      <div class="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="company-website"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Event title
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="title"
                            id="title"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  border rounded rounded-r-md sm:text-sm border-gray-300  "
                            placeholder="  Be clear and descriptive.."
                          ></input>{' '}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="about"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Add more details to your event like your schedule,
                        sponsors, or featured guests.
                      </label>
                      <div class="mt-1">
                        <textarea
                          onChange={handleChange}
                          id="desc"
                          name="desc"
                          rows="6"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="  Description.."
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <div class="mt-1">
                        <textarea
                          onChange={handleChange}
                          id="city"
                          name="city"
                          rows="1"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="  Madrid"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        URL of cover photo
                      </label>
                      <div class="mt-1">
                        <textarea
                          onChange={handleChange}
                          id="img"
                          name="img"
                          rows="1"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="  http://..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
                    <button class="inline-flex items-center justify-center w-24 py-2 mb-2 mt-2 h-10 border border-transparent shadow-sm text-base	 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Publish
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div></div>
    </div>
  );
};
